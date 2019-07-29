module.exports = {
  siteMetadata: {
    title: 'Carbon Design System',
    description: 'A Gatsby theme for the carbon design system',
    keywords: 'gatsby,theme,carbon',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        repository: {
          baseUrl: 'https://github.com/carbon-design-system/carbon-www',
          subDirectory: '',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: { modules: ['@carbon/addons-website'] },
    },
  ],
};