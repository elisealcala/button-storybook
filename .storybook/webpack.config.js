const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            sourceMap: true,
            plugins: [require('tailwindcss'), require('autoprefixer')],
          },
        },
        'sass-loader',
      ],
    },
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [require.resolve("babel-preset-react-app")]
          }
        },
        require.resolve("react-docgen-typescript-loader")
      ]
    }
  ],
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
  };