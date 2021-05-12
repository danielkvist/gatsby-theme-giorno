const path = require("path");
require("dotenv").config({
  path: path.resolve("./.env"),
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://giorno-demo.netlify.app",
  },
  flags: {
    FAST_DEV: true,
    FAST_REFRESH: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    {
      resolve: "gatsby-theme-giorno",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET_NAME,
        token: process.env.SANITY_TOKEN,
      },
    },
    "gatsby-plugin-postcss",
  ],
};
