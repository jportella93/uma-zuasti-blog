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
