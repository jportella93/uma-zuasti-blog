import { graphql } from 'gatsby';
import React from 'react';
import PublicationListView from '../components/PublicationListView';

const ClasesYTalleresView = ({
  data: { publicationsQ: { edges: publications } },
  location,
}) => (
    <PublicationListView
      publications={publications}
      title="Clases y talleres"
      readMoreText="Más info ->"
      location={location}
      seo={{
        title: 'Clases y talleres',
        description:
          'Consulta los próximos cursos, clases y talleres. Reserva tu plaza por teléfono/WhatsApp o email.',
        type: 'website',
      }}
      intro="Consulta los próximos talleres y cursos. Para reservar tu plaza, contacta por teléfono/WhatsApp o email."
    />
  )

export const pageQuery = graphql`
  query {
    publicationsQ: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: { templateKey: {eq: "workshop"}}}) {
      edges {
        node{
          ...Workshop
        }
      }
    }
}
`

export default ClasesYTalleresView;
