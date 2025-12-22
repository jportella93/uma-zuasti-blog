import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { BlogLimitedContainer } from '../components/Containers'
import { palette } from '../components/constants'
import { HTMLContent } from '../components/Content'
import Separator from '../components/Separator'

const BordersContainer = styled.div`
  border-top: 10px solid ${palette.red};
  border-bottom: 10px solid ${palette.red};
`

const Container = styled(BlogLimitedContainer)`
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: left;
`

const Title = styled.h1`
  color: #111;
  font-size: 2rem;
  line-height: 1.15;
  margin: 0 0 10px;
`

const Description = styled.p`
  margin: 0;
  color: #222;
  line-height: 1.6;
  font-size: 1.05rem;
`

const Details = styled.div`
  margin-top: 14px;
  padding: 14px;
  border-radius: 12px;
  background: rgba(197, 49, 81, 0.06);
  border: 1px solid rgba(197, 49, 81, 0.18);
  color: #222;
`

const DetailRow = styled.p`
  margin: 0;
  line-height: 1.6;

  & + & {
    margin-top: 6px;
  }
`

const Actions = styled.div`
  display: grid;
  gap: 10px;
  margin-top: 14px;

  @media (min-width: 560px) {
    grid-template-columns: 1fr 1fr;
  }
`

const ActionLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 12px 14px;
  font-weight: 800;
  text-decoration: none;
  cursor: pointer;
`

const Primary = styled(ActionLink)`
  background: ${palette.red};
  color: ${palette.white};
`

const Secondary = styled(ActionLink)`
  background: transparent;
  color: ${palette.red};
  border: 2px solid ${palette.red};
`

const ContentWrap = styled.div`
  margin-top: 22px;

  p,
  li {
    color: #222;
    line-height: 1.75;
    font-size: 1.05rem;
  }

  a {
    color: ${palette.red};
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`

const SectionTitle = styled.h2`
  color: #111;
  font-size: 1.25rem;
  margin: 0 0 14px;
`

const RelatedList = styled.ul`
  margin: 0;
  padding-left: 18px;
`

const WorkshopTemplate = ({ post, relatedArticles }) => {
  const { title, description, eventDates, eventPlace } = post.frontmatter

  return (
    <section>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}

      {(eventPlace || eventDates) && (
        <Details aria-label="Detalles del taller">
          {eventPlace && (
            <DetailRow>
              <b>Lugar:</b> {eventPlace}
            </DetailRow>
          )}
          {eventDates && (
            <DetailRow>
              <b>Fechas:</b> {eventDates}
            </DetailRow>
          )}
        </Details>
      )}

      <Actions aria-label="Acciones de reserva">
        <Primary href="https://wa.me/34636231517?text=Hola%20Uma%2C%20quiero%20reservar%20plaza%20en%20un%20taller.">
          WhatsApp para reservar
        </Primary>
        <Secondary href="mailto:umazuasti@gmail.com?subject=Reserva%20taller">Escribir por email</Secondary>
      </Actions>
      <p style={{ marginTop: '10px', color: '#333' }}>
        <b>Teléfono:</b>{' '}
        <a href="tel:636231517" style={{ color: palette.red, textDecoration: 'underline' }}>
          636 23 15 17
        </a>
      </p>

      <ContentWrap>
        <HTMLContent content={post.html} />
      </ContentWrap>

      {relatedArticles.length ? (
        <>
          <Separator height="28px" />
          <SectionTitle>Artículos relacionados</SectionTitle>
          <RelatedList>
            {relatedArticles.map(a => (
              <li key={a.id}>
                <Link to={a.fields.slug}>{a.frontmatter.title}</Link>
              </li>
            ))}
          </RelatedList>
        </>
      ) : null}
    </section>
  )
}

const Workshop = ({ data, location }) => {
  const { markdownRemark: post } = data
  const articles = data?.articles?.edges?.map(e => e.node) || []

  const productType = post?.frontmatter?.productType

  const relatedArticles = articles
    .filter(a => !productType || a?.frontmatter?.productType === productType)
    .slice(0, 4)

  return (
    <Layout bgColor={palette.white} navbarColor={palette.red}>
      <SEO
        type="workshop"
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        pathname={location?.pathname}
        image={post.frontmatter.featuredImage}
        publishedTime={post.frontmatter.dateISO}
      />
      <BordersContainer>
        <Container>
          <WorkshopTemplate post={post} relatedArticles={relatedArticles} />
        </Container>
      </BordersContainer>
    </Layout>
  )
}

Workshop.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Workshop

export const pageQuery = graphql`
  query WorkshopByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        dateISO: date(formatString: "YYYY-MM-DD")
        title
        description
        productType
        featuredImage
        eventDates
        eventPlace
      }
    }
    articles: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "article" } } }
      limit: 80
    ) {
      edges {
        node {
          ...Article
        }
      }
    }
  }
`
