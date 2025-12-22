import { graphql } from 'gatsby';
import React from 'react';
import ServiceView from '../../components/ServiceView';

const BiodanzaPerinatalView = ({ data, location }) => {
  data.title = "Biodanza Perinatal"
  data.description =
    "Biodanza Perinatal acompaña el puerperio y la crianza con música, movimiento y vínculo en un entorno seguro. Aquí puedes ver próximos talleres y publicaciones relacionadas."
  data.location = location

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
