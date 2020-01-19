import { graphql } from 'gatsby';
import React from 'react';
import PublicationListView from '../components/PublicationListView';

const PublicacionesView = ({
  data: { publicationsQ: { edges: publications }, }
}) => (
    <PublicationListView
      publications={publications}
      title="Publicaciones"
      readMoreText="Leer más ->"
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
}
`

export default PublicacionesView;
