module.exports = {
  siteMetadata: {
    siteUrl: "https://www.bruuu.github.io",
    title: "Personal Blog",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
  ],
};
