import React from 'react';
import styled from 'styled-components';
import { LimitedContainer } from '../components/Containers';
import ImageTextBlock, { getShadowPosition } from '../components/ImageTextBlock';
import Layout from '../components/Layout';
import { A, H1, H2 } from '../components/TextStyles.js';

const Title = styled(H1)`
  margin: 0 auto;
  padding: 32px 0 16px;
`

const MoreInfoText = styled(H2)`
  text-decoration: underline;
  padding-bottom: 32px;
  text-align: left;
`

const PublicationListView = ({ publications, title, readMoreText }) => (
  <Layout>
    <LimitedContainer>
      <Title>{title}</Title>
    </LimitedContainer>
    {publications
      .map(({ node: post }, i, publications) => (
        <ImageTextBlock
          key={post.id}
          imgSrc={post.frontmatter.featuredImage}
          imgLink={post.fields.slug}
          shadow={getShadowPosition(publications.length, i)}
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
              <MoreInfoText>{readMoreText}</MoreInfoText>
            </A>
          )}
        />
      ))}
  </Layout>
)

export default PublicationListView;
