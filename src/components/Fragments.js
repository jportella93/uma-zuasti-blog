import { graphql } from 'gatsby';

export const Fluid1200 = graphql`
  fragment Fluid1200 on File {
    id
    childImageSharp {
      fluid(maxWidth: 1200) {
        # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`

export const Article = graphql`
  fragment Article on MarkdownRemark {
    id
    fields {
      slug
      featuredImageFile {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 78) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
    }
    frontmatter {
      title
      description
      productType
      featuredImage
      date(formatString: "MMMM DD, YYYY")
    }
  }
`

export const Workshop = graphql`
  fragment Workshop on MarkdownRemark {
    id
    fields {
      slug
      featuredImageFile {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 78) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
    }
    frontmatter {
      title
      description
      productType
      featuredImage
      eventDates
      eventPlace
      expirationDate
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
