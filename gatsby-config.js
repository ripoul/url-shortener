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
    description: `Choose your provider among many and transform an unreadable url to a beautiful short url. Choose among the most famous url shortener and share your new shortened links.`,
    author: `@Ripoul & @VictorFAVREAU`,
    siteUrl:`https://url-shortener.ripoul.fr`,
    icon: `src/images/fav-icon.png`
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
        icon: `src/images/fav-icon.png`
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
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-147713561-1`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://url-shortener.ripoul.fr`,
      },
    },
  ]
};
