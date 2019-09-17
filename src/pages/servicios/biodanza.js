import {graphql} from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import BlogPostCard from '../../components/BlogPostCard'
import {LimitedContainer} from '../../components/Containers'
import Layout from '../../components/Layout'
import {A, H1, H2, P} from '../../components/TextStyles.js'

const BiodanzaView = ({data}) => {
  const title = data.site.siteMetadata.title
  const {edges: posts} = data.allMarkdownRemark
  let talleres = [], blogPosts = [];
  posts.forEach(post => {
    post.node.frontmatter.tags.includes('Taller') ||
      post.node.frontmatter.tags.includes('Talleres') ?
      talleres.push(post) : blogPosts.push(post);
  })

  return (
    <Layout>
      <Helmet title={`Biodanza | ${title}`} />
      <LimitedContainer verticalPadding={true}>
        <H1>Biodanza</H1>
        <H2>Próximos talleres:</H2>
        {talleres
          .map(({node: post}) => (
            <P key={post.id}>
              <A
                to={post.fields.slug}>
                {post.frontmatter.title}
              </A>
            </P>
          ))}
        <H2>Artículos sobre Biodanza:</H2>
        {
          posts
            .map(({node: post}) => (
              <BlogPostCard key={post.id} post={post} />
            ))
        }
      </LimitedContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BiodanzaView {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" }, tags: {in: "Biodanza"} }}
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


export default BiodanzaView;
