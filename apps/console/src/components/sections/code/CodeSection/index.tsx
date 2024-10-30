import { a11yLight, CopyBlock } from 'react-code-blocks';
import { JustWeb3Context } from '@justweb3/widget';
import { useContext, useMemo } from 'react';
import { useJustWeb3Theme } from '@justweb3/ui';
import { useConsole } from '../../../../providers/ConsoleProvider';

export const CodeSection: React.FC = () => {
  const { config } = useContext(JustWeb3Context);
  const { color } = useJustWeb3Theme();
  const { justVerified } = useConsole();

  const code = useMemo(() => {
    const plugins = [];

    if (config.plugins?.find((p) => p.name === 'JustVerifiedPlugin')) {
      plugins.push(
        `JustVerifiedPlugin([${justVerified.map((v) => `'${v}'`).join(', ')}])`
      );
    }

    if (config.plugins?.find((p) => p.name === 'EFPPlugin')) {
      plugins.push('EFPPlugin');
    }

    return `import '@rainbow-me/rainbowkit/styles.css'
import '@justweb3/widget/styles.css'
import React from 'react';
import { 
  getDefaultConfig,
  getDefaultWallets,
  RainbowKitProvider
} from '@rainbow-me/rainbowkit';
import { 
  argentWallet,
  ledgerWallet,
  trustWallet
} from '@rainbow-me/rainbowkit/wallets';
import {
  QueryClient, 
  QueryClientProvider 
} from '@tanstack/react-query';
import {
  WagmiProvider
} from 'wagmi';
import { 
  mainnet,
  sepolia
} from 'wagmi/chains';
import { 
  JustWeb3Provider, 
  JustWeb3ProviderConfig, 
  JustWeb3Button
} from '@justweb3/widget';
import {
  ConnectButton 
} from '@rainbow-me/rainbowkit';
${
  config.plugins?.find((p) => p.name === 'JustVerifiedPlugin')
    ? "import { JustVerifiedPlugin } from '@justverified/plugin';"
    : ''
}
${
  config.plugins?.find((p) => p.name === 'EFPPlugin')
    ? "import { EFPPlugin } from 'justweb3-efp-plugin';"
    : ''
}
        
export const App: React.FC = () => {
    const { wallets } = getDefaultWallets();
    
    const config = getDefaultConfig({
      appName: 'RainbowKit demo',
      projectId: 'YOUR_PROJECT_ID',
      wallets: [
        ...wallets,
        {
          groupName: 'Other',
          wallets: [argentWallet, trustWallet, ledgerWallet],
        }
      ],
      chains: [mainnet, sepolia],
      ssr: true
    });
  
    const justweb3Config: JustWeb3ProviderConfig = ${JSON.stringify(
      {
        ...config,
        dev: undefined,
        disableOverlay: undefined,
        plugins: plugins.length > 0 ? plugins : undefined,
        color: color,
      },
      null,
      2
    )};
  
    const queryClient = new QueryClient();
  
    return (
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <JustWeb3Provider config={justweb3Config}>
              <JustWeb3Button>
                <ConnectButton />
              </JustWeb3Button>
            </JustWeb3Provider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    );
};

export default App;
      `;
  }, [color, config, justVerified]);

  return (
    <div className="h-full w-[30%] min-w-[300px] border-l-[1px] pointer-events-auto flex flex-col max-h-[calc(100vh-60px)] overflow-y-auto py-5 px-2.5 gap-5 justify-between">
      <p className="text-sm font-medium leading-[140%]">Code</p>
      <CopyBlock
        text={code
          .replace(`"JustVerified`, `JustVerified`)
          .replace('])"', '])')
          .replace(`"EFPPlugin"`, `EFPPlugin`)}
        language={'tsx'}
        customStyle={{
          fontSize: '12px',
        }}
        showLineNumbers={true}
        theme={a11yLight}
      />
    </div>
  );
};
