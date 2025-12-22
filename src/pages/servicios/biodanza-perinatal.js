import { graphql } from 'gatsby';
import React from 'react';
import ServiceView from '../../components/ServiceView';

const BiodanzaPerinatalView = ({ data, location }) => {
  data.title = "Biodanza Perinatal"
  data.description =
    "Biodanza Perinatal forma parte de mi trayectoria en el acompañamiento del puerperio y la crianza desde el cuerpo, el movimiento y el vínculo. Hoy doy prioridad a Danza Emoción y a un acompañamiento psicológico integrativo como marco principal. Aquí puedes ver publicaciones y actividades relacionadas como parte de ese recorrido."
  data.location = location
  data.noindex = true

  return <ServiceView {...data} />
}

export const pageQuery = graphql`
  query {
    workshopsQ: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "workshop"}, productType: {eq: "biodanza-perinatal"}}}) {
      edges {
        node{
          ...Workshop
        }
      }
    }
    articlesQ: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "article"}, productType: {eq: "biodanza-perinatal"}}}) {
      edges {
        node{
          ...Article
        }
      }
    }
    featuredImageQ: file(name: {eq: "3-perinatal-1"}) {
      ...Fluid1200
    }
  }
`

export default BiodanzaPerinatalView;
