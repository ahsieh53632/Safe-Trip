module.exports = {
    pathPrefix: `/safe-trip`,
    siteMetadata: {
        title: "safe-trip",
    },
    plugins: [
        "gatsby-plugin-resolve-src",
        {
        resolve: `gatsby-plugin-material-ui`,
        options: {
            webFontsConfig: {
              fonts: {
                
                google: [
                  {
                    family: `Montserrat`,
                    variants: [`300`, `400`, `500`],
                  },
                  {
                      family: `Roboto`,
                      variants: [`latin`]
                  }
                ],
              },
            },
            stylesProvider: {
                injectFirst: true,
            },
            pathToStylesProvider: `assets/scss/material-kit-react.scss?v=1.4.0`,
          }
        },
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
        "gatsby-plugin-sass",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Safe trip",
                short_name: "st",
                start_url: "/",
                background_color: "#663399",
                theme_color: "#663399",
                display: "standalone",
                icon: "static/dog.png", // This path is relative to the root of the site.
            },
        },
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-offline"],
        };
