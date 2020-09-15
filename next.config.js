const withPlugins = require('next-compose-plugins');
const withOffline = require('next-offline');
// const withLess = require('@zeit/next-less');
// const withCSS = require('@zeit/next-css');
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });



const environment = {
  // BASE_URL: "https://urluckyultravioletstar.now.sh",
};
// console.log("Config====>", process.env.NODE_ENV);

const nextConfig = {
  // env: environment,
  poweredByHeader: false,
  target: "serverless",
  // distDir: 'build',
};


// withOffline
// module.exports = withPlugins([
//   [ withBundleAnalyzer({})],
//   nextConfig
// ]);
module.exports = nextConfig;



