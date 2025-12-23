const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// Ensure Spanish month/day names when using `date(formatString: ...)` in GraphQL queries.
// Gatsby v2 uses Moment for date formatting internally.
const moment = require('moment')
require('moment/locale/es')
moment.locale('es')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const nowIso = new Date().toISOString()

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              productType
              title
              description
              date
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    result.errors.forEach(e => console.error(e.toString()))
    return Promise.reject(result.errors)
  }

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(edge => {
    const id = edge.node.id
    const { templateKey, productType } = edge.node.frontmatter
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(`src/templates/${String(templateKey)}.js`),
      // additional data can be passed via context
      context: {
        id,
        productType,
        nowIso,
      },
    })
  })

  // Create tag pages for internal linking (/tags/<tag>/)
  const tagsResult = await graphql(`
    {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  if (tagsResult.errors) {
    tagsResult.errors.forEach(e => console.error(e.toString()))
    return Promise.reject(tagsResult.errors)
  }

  const tagTemplate = path.resolve('src/templates/tags.js')
  const tags = tagsResult.data.allMarkdownRemark.group
    .map(g => g.fieldValue)
    .filter(Boolean)

  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagTemplate,
      context: { tag },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode, getNodesByType }) => {
  const { createNodeField } = actions

  if (node.internal.type !== `MarkdownRemark`) return

  // Slug for markdown pages.
  const value = createFilePath({ node, getNode })
  createNodeField({
    name: `slug`,
    node,
    value,
  })

  // Link Netlify CMS `featuredImage: /img/<file>` frontmatter to a File node,
  // exposing it as `fields.featuredImageFile` (so we can query `childImageSharp`).
  const raw = node.frontmatter?.featuredImage
  if (!raw || typeof raw !== 'string') return

  let relativePath = raw.trim().replace(/^\/+/, '')
  if (relativePath.startsWith('img/')) relativePath = relativePath.slice('img/'.length)
  if (!relativePath) return

  const fileNode = getNodesByType('File').find(
    f => f?.sourceInstanceName === 'uploads' && f?.relativePath === relativePath
  )
  if (!fileNode) return

  createNodeField({
    name: `featuredImageFile___NODE`,
    node,
    value: fileNode.id,
  })
}
