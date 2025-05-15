import { graphql } from 'gatsby';
import React from 'react';
import ServiceView from '../../components/ServiceView';

const DanzaEmocionView = ({ data }) => {
  data.title = "Danza Emoción"

  return <ServiceView {...data} />
}

export const pageQuery = graphql`
  query {
    workshopsQ: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: { templateKey: {eq: "workshop"} productType: {eq: "danza-emocion"}}}) {
      edges {
        node{
          ...Article
        }
      }
    }
    articlesQ: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "article"} productType: {eq: "danza-emocion"}}}) {
      edges {
        node{
          ...Article
        }
      }
    }
    featuredImageQ: file(name: {eq: "2-danza-emocion-1"}) {
      ...Fluid1200
    }
}
`

export default DanzaEmocionView; 