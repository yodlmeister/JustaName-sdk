'use client';

import {
  UseMutateAsyncFunction,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { useJustaName, useSubnameSignature } from '../../providers';
import { useMountedAccount } from '../account/useMountedAccount';
import { ChainId, SubnameUpdateRoute, SupportedCoins } from '@justaname.id/sdk';
import { useAccountSubnames } from '../account/useAccountSubnames';
import { useEnsWalletClient } from '../client/useEnsWalletClient';
import {
  setAddressRecord,
  setContentHashRecord,
  setRecords,
  setTextRecord,
} from '@ensdomains/ensjs/wallet';
import { useRecords } from '../records';
import { splitDomain } from '../../helpers';
import { useEnsPublicClient } from '../client/useEnsPublicClient';
import { useUpdateChanges } from './useUpdateChanges';
import { useMemo } from 'react';

export interface UseSubnameUpdateFunctionParams
  extends Omit<SubnameUpdateRoute['params'], 'username' | 'ensDomain'> {
  ens: string;
}

export interface UseUpdateSubnameParams {
  chainId?: ChainId;
}

export interface UseUpdateSubnameResult {
  updateSubname: UseMutateAsyncFunction<
    void,
    Error,
    UseSubnameUpdateFunctionParams
  >;
  isUpdateSubnamePending: boolean;
}

export const useUpdateSubname = (
  params?: UseUpdateSubnameParams
): UseUpdateSubnameResult => {
  const queryClient = useQueryClient();
  const { justaname, chainId } = useJustaName();
  const _chainId = useMemo(() => params?.chainId || chainId, [params, chainId]);
  const { address } = useMountedAccount();
  const { getSignature } = useSubnameSignature();
  const { refetchAccountSubnames } = useAccountSubnames({
    chainId: _chainId,
  });
  const { getRecords } = useRecords({
    chainId: _chainId,
  });
  const { ensWalletClient } = useEnsWalletClient({
    chainId: _chainId,
  });
  const { ensClient } = useEnsPublicClient({
    chainId: _chainId,
  });
  const { checkIfUpdateIsValid, getUpdateChanges } = useUpdateChanges({
    chainId: _chainId,
  });

  const mutate = useMutation<void, Error, UseSubnameUpdateFunctionParams>({
    mutationFn: async (_params: UseSubnameUpdateFunctionParams) => {
      if (!address) {
        throw new Error('No address found');
      }

      const records = await getRecords({
        ens: _params.ens,
        chainId: _params.chainId || _chainId,
      });

      if (!records) {
        throw new Error('No records found');
      }

      const { changedAddresses, changedTexts, changedContentHash } =
        await getUpdateChanges(_params);

      if (records.isJAN) {
        const signature = await getSignature();

        const [username, ensDomain] = splitDomain(_params.ens);
        await justaname.subnames.updateSubname(
          {
            chainId: _params.chainId || _chainId,
            // contentHash: _params.contentHash?.protocolType ? _params?.contentHash?.protocolType === '' ? '' : `${_params?.contentHash?.protocolType}://${_params?.contentHash?.decoded}` : undefined,
            contentHash: changedContentHash,
            addresses: changedAddresses?.map((address) => ({
              address: address.address,
              coinType: address.coinType.toString() as SupportedCoins,
            })),
            text: changedTexts,
            ensDomain: ensDomain,
            username: username,
          },
          {
            xAddress: address,
            xSignature: signature.signature,
            xMessage: signature.message,
          }
        );
      } else {
        if (!ensWalletClient) {
          throw new Error(
            'No Wallet Client found, chain not supported, only mainnet and sepolia are supported'
          );
        }

        const changeIsValid = await checkIfUpdateIsValid(_params);
        if (!changeIsValid) {
          return;
        }

        let changes = 0;

        if (changedAddresses && changedAddresses.length > 0) {
          changes++;
        }

        if (changedTexts && changedTexts.length > 0) {
          changes++;
        }

        if (changedContentHash) {
          changes++;
        }

        if (changes === 0) {
          return;
        }

        let hash: `0x${string}` | undefined;
        if (changes === 1) {
          if (changedAddresses && changedAddresses.length === 1) {
            hash = await setAddressRecord(ensWalletClient, {
              name: _params.ens,
              account: address,
              coin: changedAddresses[0].coinType,
              value: changedAddresses[0].address,
              resolverAddress: records.records.resolverAddress as `0x${string}`,
            });
          }

          if (changedTexts && changedTexts.length === 1) {
            hash = await setTextRecord(ensWalletClient, {
              name: _params.ens,
              account: address,
              key: changedTexts[0].key,
              value: changedTexts[0].value,
              resolverAddress: records.records.resolverAddress as `0x${string}`,
            });
          }

          if (changedContentHash) {
            hash = await setContentHashRecord(ensWalletClient, {
              name: _params.ens,
              account: address,
              contentHash: changedContentHash,
              resolverAddress: records.records.resolverAddress as `0x${string}`,
            });
          }
        }

        if (!hash) {
          hash = await setRecords(ensWalletClient, {
            name: _params.ens,
            account: address,
            coins:
              changedAddresses && changedAddresses.length > 0
                ? changedAddresses.map((address) => ({
                    value: address.address,
                    coin: address.coinType,
                  }))
                : undefined,
            texts:
              changedTexts && changedTexts.length > 0
                ? changedTexts
                : undefined,
            contentHash: changedContentHash,
            resolverAddress: records.records.resolverAddress as `0x${string}`,
          });
        }

        await ensClient?.waitForTransactionReceipt({ hash });
      }

      getRecords(
        {
          ens: _params.ens,
          chainId: _params.chainId || _chainId,
        },
        true
      ).then(() => {
        queryClient.invalidateQueries({
          predicate: (query) => {
            return query.queryKey.includes('ENS_UPDATE_CHANGES');
          },
        });
      });
      refetchAccountSubnames();
      return;
    },
  });

  return {
    updateSubname: mutate.mutateAsync,
    isUpdateSubnamePending: mutate.isPending,
  };
};
