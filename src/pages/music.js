import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

import { GatsbyImage } from "gatsby-plugin-image";

import * as css from './music.module.scss'
 
const Music = ({ data }) => (
	<Layout>
		<Seo title="Good Music -" keywords={[`music`, `recommendations`, `albums`]} />
		
		<div className={css.wrapper}>

		<h2 className={css.pageTitle}>Music Recommendations</h2>
			
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<div className={css.album} key={node.id}>
 
					{/* <Img fluid={node.frontmatter.cover.childImageSharp.fluid} className={css.cover}/> */}
					<GatsbyImage image={node.frontmatter.cover.childImageSharp.gatsbyImageData} alt="asd" />

					<div className={css.information}>

						<h3 className={css.artist}>{node.frontmatter.artist}</h3>
						<h3 className={css.title}>{node.frontmatter.title}</h3>

						<div className={css.comments} dangerouslySetInnerHTML={{ __html: node.html }} />

						<p className={css.date}>{node.frontmatter.date}</p>

					</div>
					
				</div>
			))}
 		</div>
 
 	</Layout>
 )
 
 export default Music

export const query = graphql`
	query {
		allMarkdownRemark(
			filter: { fields:  { slug: { regex:"/music/"}}},
			sort: { fields: [frontmatter___date], order: DESC }
			) {
			totalCount
			edges {
				node {
					id
					html
					frontmatter {
						date(formatString: "D MMMM YY")
						title
						artist
						cover {
							childImageSharp {
								gatsbyImageData(width: 200)
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