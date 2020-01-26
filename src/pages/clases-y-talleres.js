import { graphql } from 'gatsby';
import React from 'react';
import PublicationListView from '../components/PublicationListView';

const ClasesYTalleresView = ({
  data: { publicationsQ: { edges: publications } }
}) => (
    <PublicationListView
      publications={publications}
      title="Clases y talleres"
      readMoreText="Más info ->"
    />
  )

export const pageQuery = graphql`
  query {
    publicationsQ: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: { templateKey: {eq: "workshop"}}}) {
      edges {
        node{
          ...Article
        }
      }
    }
}
`

export default ClasesYTalleresView;
