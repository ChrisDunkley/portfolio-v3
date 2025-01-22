const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {

	// Destructure the createPage function from the actions object
	const { createPage } = actions;

	const result = await graphql(`
        query BLOG_POSTS {
            allMdx(filter: {frontmatter: {path: {ne: null}}}) {
                edges {
                    node {
                        id
                        frontmatter {
                          path
                        }
                    }
                }
            }
        }
    `);

	if (result.errors) {
		reporter.panicOnBuild("🚨  ERROR: Loading \"createPages\" query");
	}

	// Create blog post pages.
	const posts = result.data.allMdx.edges;

	// you'll call `createPage` for each result
	posts.forEach(({ node }, index) => {
		createPage({
			// This component will wrap our MDX content
			component: path.resolve("./src/templates/blog-post.js"),
			// Pass any value you want to access inside the template. They'll be available via `props`.
			context: {
				id: node.id
			},
			// Slug defined with frontmatter in each MDX file.
			path: "notes/" + node.frontmatter.path
		});
	});
};