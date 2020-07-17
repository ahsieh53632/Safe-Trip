module.exports = {
    pathPrefix: `/tour-of-taiwan`,
    siteMetadata: {
        title: "Tour of Taiwan",
    },
    plugins: [
        "gatsby-plugin-resolve-src",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sass",
        "gatsby-plugin-material-ui",
        "gatsby-plugin-flow",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown`,
                path: `${__dirname}/content/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/img/`,
            },
        },
        "gatsby-background-image",
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                // CommonMark mode (default: true)
                commonmark: true,
                // Footnotes mode (default: true)
                footnotes: true,
                // Pedantic mode (default: true)
                pedantic: true,
                // GitHub Flavored Markdown mode (default: true)
                gfm: true,
                // Plugins configs
                plugins: [
                    {
                        resolve: `gatsby-transformer-remark`,
                        options: {
                            plugins: [`gatsby-remark-copy-linked-files`],
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 590,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "UMCP TASA Tour of Taiwan",
                short_name: "Tour of Taiwan",
                start_url: "/tour-of-taiwan",
                background_color: "#663399",
                theme_color: "#663399",
                display: "standalone",
                icon: "static/youyouka-512.png", // This path is relative to the root of the site.
            },
        },
        "gatsby-plugin-offline",
    ],
};
