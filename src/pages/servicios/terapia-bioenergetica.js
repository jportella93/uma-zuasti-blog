import { graphql } from 'gatsby';
import React from 'react';
import ServiceView from '../../components/ServiceView';

const BioenergeticaView = ({ data, location }) => {
  data.title = "Terapia Bioenergética"
  data.description =
    "La Terapia Bioenergética es una terapia corporal orientada a desbloquear tensiones y favorecer el flujo de energía vital a través de respiración y movimiento. Consulta talleres y artículos para profundizar."
  data.location = location

  return <ServiceView {...data} />
}

export const pageQuery = graphql`
  query {
    workshopsQ: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "workshop"}, productType: {eq: "bioenergetica"}}}) {
      edges {
        node{
          ...Workshop
        }
      }
    }
    articlesQ: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "article"}, productType: {eq: "bioenergetica"}}}) {
      edges {
        node{
          ...Article
        }
      }
    }
    featuredImageQ: file(name: {eq: "4-bioenergetica-1"}) {
      ...Fluid1200
    }
  }
`

export default BioenergeticaView;
