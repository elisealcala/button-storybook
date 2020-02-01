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
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true,
            presets: [['react-app', { flow: false, typescript: true }]],
          },
        },
      ],
    }
  ],
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
  };