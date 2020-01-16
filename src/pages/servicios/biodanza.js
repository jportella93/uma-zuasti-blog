import { graphql } from 'gatsby';
import React from 'react';
import ServiceView from '../../components/ServiceView';

const BiodanzaView = ({ data }) => {
  data.title = "Biodanza"

  return <ServiceView {...data} />
}

export const pageQuery = graphql`
  query {
    workshopsQ: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: { templateKey: {eq: "workshop"} productType: {eq: "biodanza"}}}) {
      edges {
        node{
          ...Article
        }
      }
    }
    articlesQ: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "article"} productType: {eq: "biodanza"}}}) {
      edges {
        node{
          ...Article
        }
      }
    }
    featuredImageQ: file(name: {eq: "1-biodanza-1"}) {
      ...Fluid1200
    }
}
`

export default BiodanzaView;
