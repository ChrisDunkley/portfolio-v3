/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Chris Dunkley`,
    siteUrl: `https://www.chrisdunkley.net`,
    description: `Home of Chris Dunkley, Designer.`,
  },
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "music",
        "path": "./src/music/"
      },
      __key: "music"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "notes",
        "path": "./src/notes/"
      },
      __key: "notes"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "covers",
        "path": "./static/assets/"
      },
      __key: "covers"
    }, {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
      },
    },]
};