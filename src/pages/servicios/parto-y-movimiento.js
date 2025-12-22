import { graphql } from 'gatsby';
import React from 'react';
import ServiceView from '../../components/ServiceView';

const PartoYMovimientoView = ({ data, location }) => {
  data.title = "Parto y Movimiento"
  data.description =
    "Preparación corporal y sensorial al parto basada en anatomía, respiración y movilidad de la pelvis. Aquí encontrarás talleres y publicaciones para acompañarte en el proceso."
  data.location = location

  return <ServiceView {...data} />
}

export const pageQuery = graphql`
  query {
    workshopsQ: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "workshop"}, productType: {eq: "parto-y-movimiento"}}}) {
      edges {
        node{
          ...Workshop
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
