const withPlugins = require("next-compose-plugins");
const withSourceMaps = require("@zeit/next-source-maps");

module.exports = withPlugins([withSourceMaps], {
  webpack: (config, { dir, defaultLoaders }) => {
    config.resolve.extensions.push(".ts", ".tsx");
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [dir],
      exclude: /node_modules/,
      use: [
        defaultLoaders.babel,
        { loader: "ts-loader", options: { transpileOnly: true } }
      ]
    });

    return config;
  }
});
