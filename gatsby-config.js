module.exports = {
  siteMetadata: {
    title: `Url Shortener`,
    description: `Shorten your url with many providers`,
    author: `@Ripoul & @VictorFAVREAU`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Url Shortener`,
        short_name: `Url Shortener`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },
    `gatsby-plugin-offline`
  ]
};
