import { graphql } from 'gatsby';
import React from 'react';
import ServiceView from '../../components/ServiceView';

const BiodanzaView = ({ data, location }) => {
  data.title = "Biodanza"
  data.description =
    "Biodanza es una práctica vivencial que combina música y movimiento para favorecer la integración afectiva, el bienestar y la conexión con la vida. Aquí encontrarás próximos talleres y artículos para profundizar."
  data.location = location

  return <ServiceView {...data} />
}

export const pageQuery = graphql`
  query {
    workshopsQ: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: { templateKey: {eq: "workshop"} productType: {eq: "biodanza"}}}) {
      edges {
        node{
          ...Workshop
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
