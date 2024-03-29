const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const workPost = path.resolve('./src/templates/work-post.js');
const blogPost = path.resolve('./src/templates/blog-post.js');

 
exports.onCreateNode = ({ node, getNode, actions }) => {

	const { createNodeField } = actions
	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode, basePath: `pages` })
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
	}
}

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions
	return graphql(`
		{
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`).then(result => {
		result.data.allMarkdownRemark.edges.forEach(({ node }) => {

			if(node.fields.slug.indexOf("/blog/") != -1) {
				createPage({
					path: node.fields.slug,
					component: blogPost,
					context: {
						// Data passed to context is available
						// in page queries as GraphQL variables.
						slug: node.fields.slug,
					},
				})
			}
		})
	})
}