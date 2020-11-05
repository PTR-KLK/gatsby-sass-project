module.exports = {
  siteMetadata: {
    title: "Gatsby Site",
    description:
      "Gatsby sass usage example",
      author: `ptrklk`,
      authorSite: `https://ptr-klk.github.io`,
      created: "2020"
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
  ],
}
