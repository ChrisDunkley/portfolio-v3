import React from 'react'
// import { Link } from 'gatsby'

import { Link, graphql } from "gatsby"

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

export const query = graphql`
	query {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
						author
					}
					fields {
						slug
					}
					excerpt
				}
			}
		}
	}
`
 
const Page = ({ data }) => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

		<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
			<Image />
		</div>

		<div>
				<h4>{data.allMarkdownRemark.totalCount} Posts</h4>
				{data.allMarkdownRemark.edges.map(({ node }) => (
					<div key={node.id}>
						<Link to={node.fields.slug} >
						<h3>
							{node.frontmatter.title}{" "}
							<span>
								— {node.frontmatter.date}
							</span>
						</h3>
						</Link>

						{node.frontmatter.author && <p>Written by {node.frontmatter.author}</p>}

					

						<p>{node.excerpt}</p>
						
					</div>
				))}
			</div>

	</Layout>
)

export default Page
