const _ = require('lodash')

// graphql function returns a promise so we can use this little promise helper to have a nice result/error state
const wrapper = promise => promise.then(result => ({ result, error: null })).catch(error => ({ error, result: null }))

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  let slug
  // Only use MDX nodes
  if (node.internal.type === 'Mdx') {
    const fileNode = getNode(node.parent)
    // If the frontmatter contains a "slug", use it
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`
    }
    // Otherwise use the title for the slug
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`
    }
    createNodeField({ node, name: 'slug', value: slug })
    // Adds the name of "gatsby-source-filesystem" as field (in this case "projects" or "pages")
    createNodeField({ node, name: 'sourceInstanceName', value: fileNode.sourceInstanceName })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Our templates for projects and files inside /pages/*.mdx
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
            }
          }
        }
        single: allMdx(filter: { fields: { sourceInstanceName: { eq: "pages" } } }) {
          edges {
            node {
              fields {
                slug
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
        component: projectPage,
        context: {
          // Pass "slug" through context so we can reference it in our query like "$slug: String!"
          slug: edge.node.fields.slug,
        },
      })
    })
    result.data.single.edges.forEach(edge => {
      createPage({
        path: edge.node.fields.slug,
        component: singlePage,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    })
    return
  }

  console.log(error)
}

// Necessary changes to get gatsby-mdx and Cypress working
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
