import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import { GatsbyImage } from "gatsby-plugin-image"

import Seo from '../components/seo'

import * as css from './work-post.module.scss'

function WorkPost ({ data }) {
	const post = data.markdownRemark;

	return (
        <Layout>
			<Seo title={`${post.frontmatter.title} -`} keywords={[`work`, `portfolio`, `design`]} />

			<div className={css.wrapper}>

				

				{post.frontmatter.images.map(({ childImageSharp }) => (
					<div className={css.heroImage} key={childImageSharp.id}>

						<GatsbyImage image={childImageSharp.gatsbyImageData} alt="test" />
					</div>
				))}

				<div className={css.info}>

					<h2 className={css.title}>{post.frontmatter.title}</h2>

					<div className={css.description} dangerouslySetInnerHTML={{ __html: post.html }} />

				</div>
				
			</div>

		</Layout>
    )
}

export default WorkPost;

export const pageQuery = graphql`
	query WorkPostQuery($slug: String!) {
		markdownRemark(fields: {slug: {eq: $slug}}) {
			html
			frontmatter {
				title
				images {
					childImageSharp {
						id
						gatsbyImageData(layout: FULL_WIDTH, width: 1280)
					}
				}
			}
		}
	}
`
