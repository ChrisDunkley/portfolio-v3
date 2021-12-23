const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const workPost = path.resolve('./src/templates/work-post.js');
const blogPost = path.resolve('./src/templates/blog-post.js');

//const { fmImagesToRelative } = require('gatsby-remark-relative-images');
 
exports.onCreateNode = ({ node, getNode, actions }) => {

	// Check for links to static images and convert path to relative (using gatsby-remark-relative-images plugin)
	//fmImagesToRelative(node);

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

			if(node.fields.slug.indexOf("/work/") != -1){
				createPage({
					path: node.fields.slug,
					component: workPost,
					context: {
						// Data passed to context is available
						// in page queries as GraphQL variables.
						slug: node.fields.slug,
					},
			})
			}
			else if(node.fields.slug.indexOf("/blog/") != -1) {
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