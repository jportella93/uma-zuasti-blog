import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { LimitedContainer } from '../components/Containers';
import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';
import { palette } from '../components/constants';

export const ArticleTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="content">
      {helmet || ''}
      <h1>
        {title}
      </h1>
      <p>{description}</p>
      <PostContent content={content} />
    </section>
  )
}

ArticleTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const ArticleContainer = styled(LimitedContainer)`
  padding-top: 40px;
  padding-bottom: 40px;
  border-top: 10px solid ${palette.red};
  border-bottom: 10px solid ${palette.red};
  text-align: unset;
`

const Article = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout
      bgColor={palette.white}
      navbarColor={palette.red}
    >
      <ArticleContainer>
        <ArticleTemplate
          content={post.html}
          contentComponent={HTMLContent}
          description={post.frontmatter.description}
          helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
          tags={post.frontmatter.tags}
          title={post.frontmatter.title}
        />
      </ArticleContainer>
    </Layout>
  )
}

Article.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Article

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
