import React from 'react';
import styled from 'styled-components';
import { LimitedContainer } from '../components/Containers';
import ImageTextBlock, { getShadowPosition } from '../components/ImageTextBlock';
import Layout from '../components/Layout';
import { A, H1, H2, P } from '../components/TextStyles.js';

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
      .map(({ node: {id, fields, frontmatter: {featuredImage, description, eventDates, eventPlace}} }, i, publications) => (
        <ImageTextBlock
          key={id}
          imgSrc={featuredImage}
          imgLink={fields.slug}
          shadow={getShadowPosition(publications.length, i)}
          shorter
          contentSlot={
            <P textAlign="left" marginTop="0" paddingTop="24px">
              <b>{title}</b><br />
              {description && <>{description}<br /></>}
              {eventPlace && <>{eventPlace}<br /></>}
              {eventDates && <>{eventDates}<br /></>}
            </P>
          }
          footerSlot={(
            <A to={fields.slug}>
              <MoreInfoText>{readMoreText}</MoreInfoText>
            </A>
          )}
        />
      ))}
  </Layout>
)

export default PublicationListView;
