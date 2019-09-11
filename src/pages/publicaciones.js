import {graphql, Link} from 'gatsby';
import {kebabCase} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import {BlogLimited} from '../components/Containers';
import Layout from '../components/Layout';

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 24px;
  margin-top: 24px;
`

const PostCard = styled.article`
  border: 1px solid #eaecee;
  padding: 2em 1em;
  margin-top: 1.5rem;
`

const StyledLink = styled(Link)`
  color: rgb(203,46,89);

  :hover {
    color: rgb(203,46,89);
    text-decoration: underline;
  }
`

const Tag = styled(Link)`
  color: #4a4a4a;

  :hover {
    text-decoration: underline;
  }
`

const PostExcerp = styled.p`
  margin-top: 1em;
`

const Button = styled(Link)`
  background-color: white;
  border: 1px solid #dbdbdb;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.375em - 1px);
  padding-left: 0.75em;
  padding-right: 0.75em;
  padding-top: calc(0.375em - 1px);
  text-align: center;
  white-space: nowrap;
  border-radius: 2px;
  font-size: 0.75rem;
`

const PublicacionesView = ({data}) => {

  const {edges: posts} = data.allMarkdownRemark

  return (
    <Layout>
      <BlogLimited>
        <Title>Publicaciones más recientes</Title>
        {posts
          .map(({node: post}) => (
            <PostCard key={post.id}>
              <p>
                <StyledLink
                  to={post.fields.slug}>
                  {post.frontmatter.title}
                </StyledLink>
                <span> &bull; </span>
                <small>{post.frontmatter.date}</small>
                {post.frontmatter.tags && post.frontmatter.tags.length &&
                  <>
                    <br />Tags:{' '}
                    {post.frontmatter.tags.map(tag => (
                      <Tag
                        key={tag + `tag`}
                        to={`/tags/${kebabCase(tag)}/`}>
                        {tag}
                        {' '}
                      </Tag>
                    ))}
                  </>
                }
              </p>
              <PostExcerp>
                {post.excerpt}
                <br />
                <br />
                <Button
                  to={post.fields.slug}>
                  Leer más →
                </Button>
              </PostExcerp>
            </PostCard>
          ))}
      </BlogLimited>
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
