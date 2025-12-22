import { graphql } from 'gatsby';
import React from 'react';
import ServiceView from '../../components/ServiceView';

const BiodanzaView = ({ data, location }) => {
  data.title = "Biodanza"
  data.description =
    "Biodanza forma parte de mi recorrido inicial en el trabajo con cuerpo, emoción y vínculo. Hoy mi enfoque actual se articula principalmente desde Danza Emoción (mi método) y un acompañamiento psicológico integrativo. Aquí encontrarás publicaciones y actividades relacionadas con Biodanza como parte de ese trayecto."
  data.location = location
  data.noindex = true

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
