import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { LimitedContainer } from './Containers';
import Foldable from './Foldable';
import ImageTextBlock, { getShadowPosition } from './ImageTextBlock';
import Layout from './Layout';
import SEO from './SEO';
import Separator from './Separator';
import WorkshopPromo from './WorkshopPromo';
import { A, H1, H2, P } from './TextStyles.js';

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

const ServiceView = ({
  title,
  description,
  location,
  workshopsQ: { edges: workshops },
  articlesQ: { edges: articles },
  featuredImageQ
}) => {
  const fluid = featuredImageQ?.childImageSharp?.fluid;
  const firstWorkshop = workshops?.[0]?.node
  return (
    <Layout>
      <SEO
        title={title}
        description={
          description ||
          `Información, publicaciones y próximos talleres de ${title}.`
        }
        pathname={location?.pathname}
        image={fluid?.src}
        type="website"
      />
      <LimitedContainer>
        <Title>{title}</Title>
        {description ? <P textAlign="left" marginTop="8px">{description}</P> : null}
      </LimitedContainer>
      {fluid && <FeaturedImage fluid={fluid} alt={`Imagen de ${title}`} />}
      <LimitedContainer>
        <WorkshopPromo workshop={firstWorkshop} productTypeLabel={title} />
      </LimitedContainer>
      <Separator height="24px" />
      <Foldable title="Próximos talleres" >
        {workshops
          .map(({ node: post }, i, workshops) => (
            <ImageTextBlock
              key={post.id}
              imgSrc={post.frontmatter.featuredImage}
              imgLink={post.fields.slug}
              imgProps={{ alt: post.frontmatter.title }}
              shadow={getShadowPosition(workshops.length, i)}
              shorter
              contentSlot={
                <P textAlign="left" marginTop="0" paddingTop="24px">
                  <b>{post.frontmatter.title}</b><br />
                  {post.frontmatter.eventPlace && <>{post.frontmatter.eventPlace}<br /></>}
                  {post.frontmatter.eventDates && <>{post.frontmatter.eventDates}<br /></>}
                </P>
              }
              footerSlot={(
                <A to={post.fields.slug}>
                  <MoreInfoText>Más info -{'>'}</MoreInfoText>
                </A>
              )}
            />
          ))}
      </Foldable>
      <Separator height="24px" />
      <Foldable title="Publicaciones">
        {articles
          .map(({ node: post }, i, articles) => (
            // <>
            <ImageTextBlock
              key={post.id}
              imgSrc={post.frontmatter.featuredImage}
              imgLink={post.fields.slug}
              imgProps={{ alt: post.frontmatter.title }}
              shadow={getShadowPosition(articles.length, i)}
              shorter
              contentSlot={
                <P textAlign="left" marginTop="0" paddingTop="24px">
                  <b>{post.frontmatter.title}</b><br />
                  {post.frontmatter.description && <>{post.frontmatter.description}<br /></>}
                </P>
              }
              footerSlot={(
                <A to={post.fields.slug}>
                  <MoreInfoText>Leer más -{'>'}</MoreInfoText>
                </A>
              )}
            />
          ))}
      </Foldable>
    </Layout>
  )
}

export default ServiceView;
