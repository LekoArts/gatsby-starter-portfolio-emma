const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope')
const _ = require('lodash')

const wrapper = promise => promise.then(result => ({ result, error: null })).catch(error => ({ error, result: null }))

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  let slug
  if (node.internal.type === 'Mdx') {
    const fileNode = getNode(node.parent)
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
    createNodeField({ node, name: 'sourceInstanceName', value: fileNode.sourceInstanceName })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projectPage = require.resolve('./src/templates/project.jsx')
  const singlePage = require.resolve('./src/templates/single.jsx')

  const { error, result } = await wrapper(
    graphql(`
      {
        projects: allMdx(filter: { fields: { sourceInstanceName: { eq: "projects" } } }) {
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
        single: allMdx(filter: { fields: { sourceInstanceName: { eq: "pages" } } }) {
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
    result.data.single.edges.forEach(edge => {
      createPage({
        path: edge.node.fields.slug,
        component: componentWithMDXScope(singlePage, edge.node.code.scope, __dirname),
        context: {
          slug: edge.node.fields.slug,
        },
      })
    })
    return
  }

  console.log(error)
}

exports.onCreateWebpackConfig = ({ stage, actions, loaders, getConfig }) => {
  const config = getConfig()

  config.module.rules = [
    ...config.module.rules.filter(rule => String(rule.test) !== String(/\.jsx?$/)),
    {
      ...loaders.js(),
      test: /\.jsx?$/,
      exclude: modulePath => /node_modules/.test(modulePath) && !/node_modules\/gatsby-mdx/.test(modulePath),
    },
  ]

  actions.replaceWebpackConfig(config)
}
