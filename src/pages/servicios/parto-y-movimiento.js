import { graphql } from 'gatsby';
import React from 'react';
import ServiceView from '../../components/ServiceView';

const PartoYMovimientoView = ({ data }) => {
  data.title = "Parto y Movimiento"

  return <ServiceView {...data} />
}

export const pageQuery = graphql`
  query {
    workshopsQ: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "workshop"}, productType: {eq: "parto-y-movimiento"}}}) {
      edges {
        node{
          ...Article
        }
      }
    }
    articlesQ: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "article"}, productType: {eq: "parto-y-movimiento"}}}) {
      edges {
        node{
          ...Article
        }
      }
    }
    featuredImageQ: file(name: {eq: "5-parto-y-movimiento-1"}) {
      ...Fluid1200
    }
  }
`

export default PartoYMovimientoView;
