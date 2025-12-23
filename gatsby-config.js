module.exports = {
  siteMetadata: {
    title: "Uma Zuasti",
    description:
      "Psicología integrativa · Danza Emoción. Acompañamiento psicológico y trabajo corporal para procesos de transformación, bienestar emocional y vínculo. Talleres y sesiones en Tarragona, Reus y online.",
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
        // Netlify CMS uploads live here (see `static/admin/config.yml`).
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
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
        plugins: [
          {
            // Converts CMS absolute paths like `/img/foo.jpg` into File links.
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            // Generates responsive images + placeholders for markdown body images.
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
              quality: 78,
              withWebp: true,
              linkImagesToOriginal: false,
              showCaptions: true,
              backgroundColor: "transparent",
            },
          },
        ],
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
