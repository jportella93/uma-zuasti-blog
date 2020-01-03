import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { LimitedContainer } from '../../components/Containers';
import Foldable from '../../components/Foldable';
import ImageTextBlock from '../../components/ImageTextBlock';
import Layout from '../../components/Layout';
import { A, H1, H2 } from '../../components/TextStyles.js';

const Title = styled(H1)`
  margin: 0 auto;
  padding: 32px 0 16px;
`

const FeaturedImage = styled(Img)`
  margin-bottom: 80px;
`

const MoreInfoText = styled(H2)`
  text-decoration: underline;
  padding-bottom: 32px;
  text-align: left;
`

function getShadowPosition(length, i) {
  const isFirst = i === 0;
  const isLast = i + 1 === length;
  if (isFirst && isLast) return 'both';
  if (isFirst) return 'top';
  if (isLast) return 'bottom';
}

const BiodanzaView = ({ data }) => {
  const { workshopsQ, articlesQ, featuredImageQ } = data;
  const { edges: workshops } = workshopsQ;
  const { edges: articles } = articlesQ;
  const { fluid } = featuredImageQ.childImageSharp

  return (
    <Layout>
      <Helmet title='Biodanza' />
      <LimitedContainer>
        <Title>Biodanza</Title>
      </LimitedContainer>
      <FeaturedImage fluid={fluid} />
      <Foldable title="Próximos talleres" >
        {workshops
          .map(({ node: post }, i, workshops) => (
            <ImageTextBlock
              key={post.id}
              imgSrc={post.frontmatter.featuredImage}
              imgLink={post.fields.slug}
              shadow={getShadowPosition(workshops.length, i)}
              shorter
              contentSlot={
                <H2 textAlign="left" marginTop="0" paddingTop="24px">
                  <b>{post.frontmatter.title}</b><br />
                  {post.frontmatter.eventPlace && <>{post.frontmatter.eventPlace}<br /></>}
                  {post.frontmatter.eventDates && <>{post.frontmatter.eventDates}<br /></>}
                </H2>
              }
              footerSlot={(
                <A to={post.fields.slug}>
                  <MoreInfoText>Más info -></MoreInfoText>
                </A>
              )}
            />
          ))}
      </Foldable>
      <Foldable title="Publicaciones">
        {articles
          .map(({ node: post }, i, articles) => (
            // <>
            <ImageTextBlock
              key={post.id}
              imgSrc={post.frontmatter.featuredImage}
              imgLink={post.fields.slug}
              shadow={getShadowPosition(articles.length, i)}
              shorter
              contentSlot={
                <H2 textAlign="left" marginTop="0" paddingTop="24px">
                  <b>{post.frontmatter.title}</b><br />
                  {post.frontmatter.description && <>{post.frontmatter.description}<br /></>}
                </H2>
              }
              footerSlot={(
                <A to={post.fields.slug}>
                  <MoreInfoText>Leer más -></MoreInfoText>
                </A>
              )}
            />
          ))}
      </Foldable>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    workshopsQ: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: { templateKey: {eq: "workshop"} productType: {eq: "biodanza"}}}) {
      edges {
        node{
          ...Article
        }
      }
    }
    articlesQ: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "article"} productType: {eq: "biodanza"}}}) {
      edges {
        node{
          ...Article
        }
      }
    }
    featuredImageQ: file(name: {eq: "1-biodanza-1"}) {
      ...Fluid1200
    }
}
`


export default BiodanzaView;
