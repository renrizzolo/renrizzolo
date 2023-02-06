import type { GatsbyConfig } from "gatsby";
import rehypePrettyCode from "rehype-pretty-code";
import prettyCodeOptions from "gatsby-theme-golden-condor/src/theme/prettyCodeOptions";
import gatsbyRemarkPlugins from "gatsby-theme-golden-condor/gatsbyRemarkPlugins";

const config: GatsbyConfig = {
  pathPrefix: "/blog",
  siteMetadata: {
    title: `renrizzolo/blog`,
    siteUrl: `https://renrizzolo.com/`,
    author: "Ren Rizzolo",
    description: "",
    image: "static-image.png",
    googleFontsQueryString: "family=Muli:wght@400;900&display=swap",
    social: [
      {
        label: "@ren_riz",
        url: "https://twitter.com/ren_riz",
      },
      {
        label: "github",
        url: "https://github.com/renrizzolo",
      },
      {
        label: "projects",
        url: "/projects",
      },
    ],
  },
  plugins: [
    // "gatsby-plugin-netlify",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-theme-golden-condor",
      options: {
        collections: {
          post: {
            showTOC: true,
            containerVariant: "container",
            columns: "[1, 2, 3]",
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins,
        plugins: [`gatsby-remark-images`], // https://github.com/gatsbyjs/gatsby/issues/15486
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              ...prettyCodeOptions,
              theme: { light: "one-dark-pro", dark: "vitesse-dark" },
            },
          ],
        ],
      },
    },
  ],
};

export default config;
