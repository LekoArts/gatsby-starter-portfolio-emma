const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope')
const _ = require('lodash')

const wrapper = promise => promise.then(result => ({ result, error: null })).catch(error => ({ error, result: null }))

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  let slug
  if (node.internal.type === 'Mdx') {
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`
    }
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`
    }
    createNodeField({ node, name: 'slug', value: slug })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projectPage = require.resolve('./src/templates/project.jsx')

  const { error, result } = await wrapper(
    graphql(`
      {
        projects: allMdx {
          edges {
            node {
              fields {
                slug
              }
              code {
                scope
              }
            }
          }
        }
      }
    `)
  )

  if (!error) {
    result.data.projects.edges.forEach(edge => {
      createPage({
        path: edge.node.fields.slug,
        component: componentWithMDXScope(projectPage, edge.node.code.scope, __dirname),
        context: {
          slug: edge.node.fields.slug,
        },
      })
    })
    return
  }

  console.log(error)
}
