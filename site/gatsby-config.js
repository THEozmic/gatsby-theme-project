module.exports = {
  __experimentalThemes: ['blogland-theme'],
  plugins: [
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`
      }
    }
  ]
};
