/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep existing behavior - all pages are client-rendered
  reactStrictMode: true,
  // Allow images from any domain (matches CRA behavior)
  images: {
    unoptimized: true,
  },
  // Transpile specific packages that need it
  transpilePackages: [
    '@nivo/bar',
    '@nivo/core',
    'react-awesome-slider',
    'react-carousel-minimal',
    'react-image-gallery',
    '@fullcalendar/core',
    '@fullcalendar/react',
    '@fullcalendar/daygrid',
    '@fullcalendar/timegrid',
    '@fullcalendar/interaction',
  ],
  // Allow global selectors in CSS modules (CRA compatibility)
  webpack: (config) => {
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      ?.oneOf?.filter((rule) => Array.isArray(rule.use));

    if (rules) {
      rules.forEach((rule) => {
        rule.use.forEach((moduleLoader) => {
          if (
            moduleLoader.loader?.includes('css-loader') &&
            !moduleLoader.loader?.includes('postcss-loader') &&
            moduleLoader.options?.modules
          ) {
            moduleLoader.options.modules.mode = 'local';
          }
        });
      });
    }

    return config;
  },
};

module.exports = nextConfig;
