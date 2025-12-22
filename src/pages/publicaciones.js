import { graphql } from 'gatsby';
import React from 'react';
import PublicationListView from '../components/PublicationListView';

const PublicacionesView = ({
  data: { publicationsQ: { edges: publications }, workshopsQ },
  location,
}) => (
    <PublicationListView
      publications={publications}
      title="Publicaciones"
      readMoreText="Leer más ->"
      location={location}
      seo={{
        title: 'Publicaciones',
        description:
          'Artículos sobre psicopedagogía corporal, biodanza, danza emoción, bioenergética y movimiento. Descubre también los próximos talleres.',
        type: 'website',
      }}
      intro="Artículos en profundidad. Si quieres practicar y profundizar, revisa los próximos talleres y clases."
      workshopPromo={workshopsQ?.edges?.[0]?.node}
    />
  )

export const pageQuery = graphql`
  query {
    publicationsQ: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: { templateKey: {eq: "article"}}}) {
      edges {
        node{
          ...Article
        }
      }
    }
    workshopsQ: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "workshop" } } }
      limit: 1
    ) {
      edges {
        node {
          ...Workshop
        }
      }
    }
}
`

export default PublicacionesView;
