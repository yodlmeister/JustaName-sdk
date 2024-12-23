import { Subnames } from '../../../lib/features';
import { Address, TextRecord } from '../../../lib/types';
import { sanitizeAddresses, sanitizeTexts } from '../../../lib/utils';
import { JustaName } from '../../../lib/justaname';
import { InvalidConfigurationException } from '../../../lib/errors';

const CHAIN_ID = 1;
const ENS_DOMAIN = 'justaname.eth';
const JUSTANAME_ENV = process.env['SDK_JUSTANAME_DEV'] === 'true';
const SEPOLIA_PROVIDER_URL = process.env['SDK_SEPOLIA_PROVIDER_URL'] as string;
const MAINNET_PROVIDER_URL = process.env['SDK_MAINNET_PROVIDER_URL'] as string;

describe('Subnames', () => {
  it('should be able to transform json text records to TextRecord', () => {
    const text = {
      'com.twitter': '@justaname',
      'com.youtube': 'justaname',
    };

    const textRequest: TextRecord[] = [
      {
        key: 'com.twitter',
        value: '@justaname',
      },
      {
        key: 'com.youtube',
        value: 'justaname',
      },
    ];

    const textArray = sanitizeTexts(text);
    expect(textArray).toEqual(textRequest);
  });

  it('should be able to transform json addresses to Address', () => {
    const addresses = {
      '0': '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
      '60': '0xb965a5f3a0fC18D84E68883ccAd508445a7917A8',
    };

    const addressRequest: Address[] = [
      {
        address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
        coinType: 0,
      },
      {
        address: '0xb965a5f3a0fC18D84E68883ccAd508445a7917A8',
        coinType: 60,
      },
    ];

    const addressArray = sanitizeAddresses(addresses);
    expect(addressArray).toEqual(addressRequest);
  });

  it('should throw error on operation needs an apiKey', async () => {
    const subnamesWithoutApiKey = new Subnames({
      chainId: CHAIN_ID,
      networks: JustaName.createNetworks([
        {
          chainId: 1,
          providerUrl: MAINNET_PROVIDER_URL,
        },
        {
          chainId: 11155111,
          providerUrl: SEPOLIA_PROVIDER_URL,
        },
      ]),
      ensDomains: [{ chainId: CHAIN_ID, ensDomain: ENS_DOMAIN }],
      dev: JUSTANAME_ENV,
    });

    expect(() =>
      subnamesWithoutApiKey.addSubname(
        {
          username: 'jan',
        },
        {
          xSignature: 'signature',
          xMessage: 'message',
          xAddress: 'address',
        }
      )
    ).rejects.toThrow(
      InvalidConfigurationException.missingHeaders(['xApiKey'])
    );
  });
});
