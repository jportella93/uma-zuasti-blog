import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Article from './article'

const Workshop = (props) => {
  return (
    <Article {...props} />
  )
}

Workshop.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Workshop

export const pageQuery = graphql`
  query Workshop($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
