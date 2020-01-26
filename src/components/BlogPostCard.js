import {Link} from 'gatsby';
import {kebabCase} from 'lodash';
import React from 'react';
import styled from 'styled-components';
import {P, A} from '../components/TextStyles'

const PostCard = styled.article`
  border: 1px solid #eaecee;
  padding: 2em 1em;
  margin-top: 1.5rem;
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

const BlogPostCard = ({post}) => (
  <PostCard key={post.id}>
    <P>
      <A
        to={post.fields.slug}>
        {post.frontmatter.title}
      </A>
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
    </P>
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
)

export default BlogPostCard;
