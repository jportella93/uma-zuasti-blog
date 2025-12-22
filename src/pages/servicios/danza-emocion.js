import { graphql } from 'gatsby';
import React from 'react';
import ServiceView from '../../components/ServiceView';

const DanzaEmocionView = ({ data, location }) => {
  data.title = "Danza Emoción"
  data.description =
    "Danza Emoción es un método de danzaterapia creado por Uma Zuasti, centrado en bienestar emocional, creatividad y conexión cuerpo‑mente. Descubre talleres y lecturas para profundizar."
  data.location = location

  return <ServiceView {...data} />
}

export const pageQuery = graphql`
  query {
    workshopsQ: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: { templateKey: {eq: "workshop"} productType: {eq: "danza-emocion"}}}) {
      edges {
        node{
          ...Workshop
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