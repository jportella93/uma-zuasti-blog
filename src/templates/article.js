import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { palette } from '../components/constants'
import { BlogLimitedContainer } from '../components/Containers'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import SubscriptionForm from '../components/SubscriptionForm'
import Separator from '../components/Separator'
import WorkshopPromo from '../components/WorkshopPromo'

function formatDateEs(dateInput) {
  if (!dateInput) return null
  const date = new Date(dateInput)
  if (Number.isNaN(date.getTime())) return null
  return new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

export const ArticleTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  date,
  productType,
  featuredImageFluid,
  featuredImageSrc,
  featuredImageAlt,
}) => {
  const PostContent = contentComponent || Content
  const dateDisplay = formatDateEs(date)
  const imageAlt = featuredImageAlt || title || ''

  return (
    <section className="content">
      <Header>
        <Title>{title}</Title>
        {featuredImageFluid ? (
          <FeaturedImage fluid={featuredImageFluid} alt={imageAlt} />
        ) : featuredImageSrc ? (
          <FeaturedImageFallbackWrap>
            <FeaturedImageFallback
              src={featuredImageSrc}
              alt={imageAlt}
              loading="eager"
              decoding="async"
            />
          </FeaturedImageFallbackWrap>
        ) : null}
        {(dateDisplay || productType) && (
          <MetaLine>
            {dateDisplay && <span>{dateDisplay}</span>}
            {dateDisplay && productType && <span> · </span>}
            {productType && <span>{productType}</span>}
          </MetaLine>
        )}
        {description && <Description>{description}</Description>}
        {tags?.length ? (
          <Tags aria-label="Etiquetas del artículo">
            {tags.map(tag => (
              <Tag key={tag} to={`/tags/${kebabCase(tag)}/`}>
                {tag}
              </Tag>
            ))}
          </Tags>
        ) : null}
      </Header>

      <ArticleBody>
        <PostContent content={content} />
      </ArticleBody>
    </section>
  )
}

ArticleTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  productType: PropTypes.string,
  featuredImageFluid: PropTypes.object,
  featuredImageSrc: PropTypes.string,
  featuredImageAlt: PropTypes.string,
}

const BordersContainer = styled.div`
  border-top: 10px solid ${palette.red};
  border-bottom: 10px solid ${palette.red};
`

const ArticleContainer = styled(BlogLimitedContainer)`
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: left;
`

const Header = styled.header`
  margin-bottom: 18px;
`

const Title = styled.h1`
  color: #111;
  font-size: 2rem;
  line-height: 1.15;
  margin: 0 0 10px;
`

const FeaturedImage = styled(Img)`
  margin-top: 12px;
  margin-bottom: 6px;
  border-radius: 12px;
  overflow: hidden;
`

const FeaturedImageFallbackWrap = styled.div`
  margin-top: 12px;
  margin-bottom: 6px;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.04);

  /* Reserve space to avoid layout shift if we can't use gatsby-image. */
  aspect-ratio: 16 / 9;
`

const FeaturedImageFallback = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const MetaLine = styled.p`
  margin: 0 0 10px;
  color: #444;
  font-size: 0.95rem;
`

const Description = styled.p`
  margin: 0;
  color: #222;
  line-height: 1.6;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`

const Tag = styled(Link)`
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.9rem;
  color: #333;
  text-decoration: none;
`

const ArticleBody = styled.div`
  margin-top: 20px;

  /* Improve readability for markdown-rendered HTML */
  p,
  li {
    color: #222;
    line-height: 1.75;
    font-size: 1.05rem;
  }

  h2,
  h3 {
    color: #111;
    margin-top: 2rem;
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
  /* Ensure bullets are visible even if a global reset removes them */
  && {
    list-style: disc;
    list-style-position: outside;
  }
  margin: 0;
  padding-left: 18px;

  li + li {
    margin-top: 8px;
  }
`

const Article = ({ data, location }) => {
  const { markdownRemark: post } = data
  const workshops = data?.workshops?.edges?.map(e => e.node) || []
  const articles = data?.articles?.edges?.map(e => e.node) || []

  const productType = post?.frontmatter?.productType
  // Match `/clases-y-talleres`: show the newest workshop by date (no expiration filtering),
  // so the promo always matches the top item in the workshops list.
  const recommendedWorkshop = workshops[0] || null

  const relatedArticles = articles
    .filter(a => a?.id !== post?.id)
    .filter(a => !productType || a?.frontmatter?.productType === productType)
    .slice(0, 3)

  return (
    <Layout
      bgColor={palette.white}
      navbarColor={palette.red}
    >
      <SEO
        type="article"
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        pathname={location?.pathname}
        image={
          post.fields?.featuredImageFile?.childImageSharp?.fluid?.src ||
          post.fields?.featuredImageFile?.publicURL ||
          post.frontmatter.featuredImage
        }
        publishedTime={post.frontmatter.dateISO}
      />
      <BordersContainer>
        <ArticleContainer>
          <ArticleTemplate
            content={post.html}
            contentComponent={HTMLContent}
            description={post.frontmatter.description}
            date={post.frontmatter.dateRaw || post.frontmatter.dateISO}
            tags={post.frontmatter.tags}
            title={post.frontmatter.title}
            productType={post.frontmatter.productType}
            featuredImageFluid={post.fields?.featuredImageFile?.childImageSharp?.fluid}
            featuredImageSrc={
              post.fields?.featuredImageFile?.publicURL ||
              post.frontmatter.featuredImage
            }
            featuredImageAlt={post.frontmatter.title}
          />
          <Separator height="28px" />
          <SectionTitle>¿Quieres profundizar con acompañamiento?</SectionTitle>
          <WorkshopPromo
            workshop={recommendedWorkshop}
            eyebrowText="Próximo taller"
          />
          {relatedArticles.length ? (
            <>
              <Separator height="28px" />
              <SectionTitle>Lecturas relacionadas</SectionTitle>
              <RelatedList>
                {relatedArticles.map(a => (
                  <li key={a.id}>
                    <Link to={a.fields.slug}>{a.frontmatter.title}</Link>
                  </li>
                ))}
              </RelatedList>
            </>
          ) : null}
          <Separator height="36px" />
          <SubscriptionForm />
        </ArticleContainer>
      </BordersContainer>
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
      excerpt(pruneLength: 160)
      fields {
        slug
        featuredImageFile {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 78) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
      }
      html
      frontmatter {
        dateISO: date(formatString: "YYYY-MM-DD")
        dateRaw: date
        title
        description
        tags
        productType
        featuredImage
      }
    }
    workshops: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "workshop" } } }
      limit: 50
    ) {
      edges {
        node {
          ...Workshop
        }
      }
    }
    articles: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "article" } } }
      limit: 100
    ) {
      edges {
        node {
          ...Article
        }
      }
    }
  }
`
