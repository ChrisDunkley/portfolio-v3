import React from 'react'
// import { Link } from 'gatsby'

import { Link, graphql } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

import Img from 'gatsby-image'

import css from "./index.module.css"
 
const Page = ({ data }) => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

		{/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
		
		<div className={css.wrapper}>
			
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<div className={css.item} key={node.id}>

					<Link to={node.fields.slug} >

						<Img fluid={node.frontmatter.thumb.childImageSharp.fluid} />

						<h3 className={css.header}>{node.frontmatter.title}</h3>
					</Link>
					
				</div>
			))}
		</div>

	</Layout>
)

export default Page

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
						thumb {
						  childImageSharp {
						    fluid {
						      ...GatsbyImageSharpFluid
						    }
						  }
						}
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
