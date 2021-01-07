module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: ['babel-plugin-styled-components'],
};
