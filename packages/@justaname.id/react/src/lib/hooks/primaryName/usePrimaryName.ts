import { Address } from 'viem';
import { getName } from '@ensdomains/ensjs/public';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ChainId } from '@justaname.id/sdk';
import { useJustaName } from '../../providers';
import { useEnsPublicClient } from '../client/useEnsPublicClient';

export const buildPrimaryName = (
  address: string,
  chainId: ChainId | undefined
) => ['PRIMARY_NAME', address, chainId];

export interface UsePrimaryNameParams {
  address?: Address;
  chainId?: ChainId;
}

export interface UsePrimaryNameResult {
  primaryName: string | undefined;
  isPrimaryNamePending: boolean;
  isPrimaryNameFetching: boolean;
  isPrimaryNameLoading: boolean;
  getPrimaryName: (
    params: getPrimaryNameParams,
    force?: boolean
  ) => Promise<string>;
  refetchPrimaryName: () => void;
}

export interface getPrimaryNameParams {
  address: Address | undefined;
  chainId?: ChainId;
}

export const usePrimaryName = (
  params?: UsePrimaryNameParams
): UsePrimaryNameResult => {
  const { chainId, justaname } = useJustaName();
  const _chainId = params?.chainId || chainId;
  const { ensClient } = useEnsPublicClient({
    chainId: _chainId,
  });
  const queryClient = useQueryClient();

  const getPrimaryName = async (
    _params: getPrimaryNameParams
  ): Promise<string> => {
    if (!ensClient) {
      throw new Error('Public client not found');
    }

    if (!params?.address) {
      throw new Error('Address is required');
    }

    let name = '';

    const reverseResolution = await getName(ensClient, {
      address: params?.address,
    });

    if (reverseResolution && reverseResolution?.name) {
      name = reverseResolution.name;
    } else {
      const primaryNameGetByAddressResponse =
        await justaname.subnames.getPrimaryNameByAddress({
          address: params?.address,
          chainId: _chainId,
        });

      if (primaryNameGetByAddressResponse) {
        name = primaryNameGetByAddressResponse.name;
      }
    }

    return name;
  };

  const query = useQuery({
    queryKey: buildPrimaryName(params?.address || '', _chainId),
    queryFn: () =>
      getPrimaryName({
        address: params?.address,
      }),
    enabled: Boolean(params?.address) && Boolean(ensClient),
  });

  const getPrimaryNameInternal = async (
    params: getPrimaryNameParams,
    force = false
  ): Promise<string> => {
    const _address = params.address || params?.address;
    if (!_address) {
      throw new Error('Address is required');
    }
    if (!force) {
      const cachedNames = queryClient.getQueryData(
        buildPrimaryName(_address, _chainId)
      ) as string;
      if (cachedNames) {
        return cachedNames;
      }
    }
    const names = await getPrimaryName({
      address: _address,
      chainId: _chainId,
    });
    queryClient.setQueryData(buildPrimaryName(_address, _chainId), names);
    return names;
  };

  return {
    primaryName: query.data,
    getPrimaryName: getPrimaryNameInternal,
    isPrimaryNamePending: query.isPending,
    isPrimaryNameFetching: query.isFetching,
    isPrimaryNameLoading: query.isLoading,
    refetchPrimaryName: query.refetch,
  };
};