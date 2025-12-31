import React from 'react';
import styled from 'styled-components';
import { LimitedContainer } from '../components/Containers';
import ImageTextBlock, { getShadowPosition } from '../components/ImageTextBlock';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import WorkshopPromo from '../components/WorkshopPromo';
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

const PublicationListView = ({
  publications,
  title,
  readMoreText,
  seo,
  intro,
  workshopPromo,
  location,
}) => (
  <Layout>
    {seo && (
      <SEO
        title={seo.title}
        description={seo.description}
        pathname={location?.pathname}
        type={seo.type || 'website'}
      />
    )}
    <LimitedContainer>
      <Title>{title}</Title>
      {intro ? <P textAlign="left" marginTop="10px">{intro}</P> : null}
      {workshopPromo ? (
        <div style={{ marginTop: '18px' }}>
          <WorkshopPromo workshop={workshopPromo} />
        </div>
      ) : null}
    </LimitedContainer>
    {publications.map(
      (
        {
          node: {
            id,
            fields,
            frontmatter: {
              featuredImage,
              description,
              eventDates,
              eventPlace,
              title: postTitle,
            },
          },
        },
        i,
        publications
      ) => (
        <ImageTextBlock
          key={id}
          fluidSrc={fields?.featuredImageFile?.childImageSharp?.fluid}
          imgSrc={fields?.featuredImageFile?.publicURL || featuredImage}
          imgLink={fields.slug}
          imgProps={{ alt: postTitle }}
          shadow={getShadowPosition(publications.length, i)}
          shorter
          contentSlot={
            <P textAlign="left" marginTop="0" paddingTop="24px">
              <b>{postTitle}</b>
              <br />
              {eventDates && (
                <>
                  {eventDates}
                  <br />
                </>
              )}
              {description && (
                <>
                  {description}
                  <br />
                </>
              )}
              {eventPlace && (
                <>
                  {eventPlace}
                  <br />
                </>
              )}
            </P>
          }
          footerSlot={
            <A to={fields.slug}>
              <MoreInfoText>{readMoreText}</MoreInfoText>
            </A>
          }
        />
      )
    )}
  </Layout>
)

export default PublicationListView;
