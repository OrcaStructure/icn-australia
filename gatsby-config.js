module.exports = {
  siteMetadata: {
    title: `ICN Australia`,
    siteUrl: `https://www.example.com`
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ICN Australia`,
        short_name: `ICN`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#d4af37`,
        display: `minimal-ui`,
        icon: `src/images/logo-icn.png`
      }
    },
    `gatsby-plugin-theme-ui`
  ]
};
