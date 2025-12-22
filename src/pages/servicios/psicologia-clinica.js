import { graphql } from 'gatsby';
import React from 'react';
import ServiceView from '../../components/ServiceView';

const PsicologiaClinicaView = ({ data, location }) => {
  data.title = "Psicología clínica"
  data.description =
    "Acompañamiento psicológico desde un enfoque integrativo, con base clínica y sensibilidad corporal. Un espacio para sostener procesos de cambio, ansiedad, duelo, crisis vitales, dificultades vinculares y regulación emocional."
  data.location = location

  return <ServiceView {...data} />
}

export const pageQuery = graphql`
  query {
    workshopsQ: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "workshop" }, productType: { eq: "psicologia-clinica" } } }
    ) {
      edges {
        node {
          ...Workshop
        }
      }
    }
    articlesQ: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "article" }, productType: { eq: "psicologia-clinica" } } }
    ) {
      edges {
        node {
          ...Article
        }
      }
    }
    featuredImageQ: file(name: { eq: "psicologia-clinica-1" }) {
      ...Fluid1200
    }
  }
`

export default PsicologiaClinicaView;

