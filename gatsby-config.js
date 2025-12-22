module.exports = {
  siteMetadata: {
    title: "Uma Zuasti",
    description:
      "Psicopedagogía corporal: Biodanza, Danza Emoción, Biodanza Perinatal, Terapia Bioenergética y Parto y Movimiento. Talleres, clases y acompañamiento en Tarragona y Reus.",
    // Canonical base URL (production is served at umazuasti.com).
    siteUrl: "https://umazuasti.com",
    language: "es",
    author: "Uma Zuasti",
    organization: {
      name: "Uma Zuasti",
      email: "umazuasti@gmail.com",
      phone: "+34 636 23 15 17",
      areaServed: ["Tarragona", "Reus", "Barcelona", "Online"],
    },
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    // 'gatsby-plugin-sass',
    "gatsby-plugin-styled-components",
    // 'gatsby-plugin-react-svg',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [],
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-120945642-4`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`*`],
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1684022,
        sv: 6,
      },
    },
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
