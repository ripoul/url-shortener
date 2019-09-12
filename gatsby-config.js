module.exports = {
  siteMetadata: {
    title: `Url Shortener`,
    menuLinks: [
      {
        name: 'home',
        link: '/',
        external: false
      },
      {
        name: 'qrcode shortener',
        link: '/qrcode',
        external: false
      },
      {
        name: 'contribute',
        link: 'https://github.com/ripoul/url-shortener',
        external: true
      }
    ],
    description: `Shorten your url with many providers`,
    author: `@Ripoul & @VictorFAVREAU`,
    siteUrl:`https://url-shortener.ripoul.fr`,
    icon: `src/images/tailwind-icon.png`
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
    `gatsby-plugin-offline`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-sitemap`
  ]
};
