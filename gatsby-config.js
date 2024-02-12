/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `landing-page`,
        siteUrl: `https://ligmann.dev`,
    },
    plugins: [
        {
            resolve: 'gatsby-source-wordpress',
            options: {
                "url": "https://ligmann.dev/graphql",
                "useACF": true,
            }
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sass",
        "gatsby-plugin-fontawesome-css",
        {
            resolve: "gatsby-plugin-google-gtag",
            options: {
                trackingIds: [],
            },
        },
        "gatsby-plugin-sitemap",
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/icon.png"
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        }]
};
