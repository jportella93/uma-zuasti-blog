import {graphql} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import BlogPostCard from '../components/BlogPostCard';
import {BlogLimitedContainer} from '../components/Containers';
import Layout from '../components/Layout';
import {H1} from '../components/TextStyles';

const Title = styled(H1)`
  margin-bottom: 24px;
  margin-top: 24px;
`

const PublicacionesView = ({data}) => {

  const {edges: posts} = data.allMarkdownRemark

  return (
    <Layout>
      <Helmet title="Publicaciones" />
      <BlogLimitedContainer>
        <Title>Publicaciones más recientes</Title>
        {
          posts
          .map(({node: post}) => (
            <BlogPostCard key={post.id} post={post} />
          ))
        }
      </BlogLimitedContainer>
    </Layout>
  )
}

PublicacionesView.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default PublicacionesView;

export const pageQuery = graphql`
  query PublicacionesQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            tags
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
