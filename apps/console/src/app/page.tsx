'use client';
import { JustEnsCard, JustWeb3Button } from '@justweb3/widget';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Split from '@uiw/react-split';
import { CodeSection } from '../components/sections/code/CodeSection';
import { Customizer } from '../components/sections/customizer/Customizer';
import { ConsoleProvider } from '../providers/ConsoleProvider';

export default function Page() {
  return (
    <div className="flex flex-row justify-between w-full h-full relative">
      <ConsoleProvider>
        <Customizer />

        <Split style={{ maxWidth: '100%', overflow: 'hidden', width: '100%' }}>
          <div
            className={`flex-1 h-full gap-3 flex-col relative bg-[url('/bg/widget-bg.png')] bg-repeat-x bg-cover flex justify-center items-center`}
          >
            <JustWeb3Button>
              <ConnectButton />
            </JustWeb3Button>

            <JustEnsCard addressOrEns={'justhadi.eth'} />
            <JustEnsCard addressOrEns={'mely.eth'} />
            <JustEnsCard addressOrEns={'nick.eth'} />
            <JustEnsCard addressOrEns={'vitalik.eth'} />
            <JustEnsCard addressOrEns={'brantly.eth'} />
            <JustEnsCard addressOrEns={'dr3a.eth'} />
          </div>
          <CodeSection />
        </Split>
      </ConsoleProvider>
    </div>
  );
}
