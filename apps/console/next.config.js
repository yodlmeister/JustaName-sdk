//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
// const MillionLint = require('@million/lint');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  // distDir: '../../dist/apps/console',
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  experimental: {
    serverComponentsExternalPackages: ['@xmtp/user-preferences-bindings-wasm'],
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

// module.exports = MillionLint.next({ rsc: true })(
//   composePlugins(...plugins)(nextConfig)
// );

module.exports = composePlugins(...plugins)(nextConfig);
