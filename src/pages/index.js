import React from 'react'

import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Img from 'gatsby-image'

import css from './index.module.scss'
 
const Index = ({ data }) => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		
		<div className={css.wrapper}>
			
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<div className={css.item} key={node.id}>

					<Link to={node.fields.slug} >

						<Img fluid={node.frontmatter.thumb.childImageSharp.fluid} />

						<h3 className={css.title}>{node.frontmatter.title}</h3>
					</Link>
					
				</div>
			))}
		</div>

	</Layout>
)

export default Index

export const query = graphql`
	query {
		allMarkdownRemark(
			filter: { fields:  { slug: { regex:"/work/"}}},
			sort: { fields: [frontmatter___date], order: DESC }
			) {
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
						    fluid(maxWidth: 800) {
						      ...GatsbyImageSharpFluid
						    }
						  }
						}
					}
					fields {
						slug
					}
				}
			}
		}
	}
`
