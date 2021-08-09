import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import SEO from '../components/seo'

import css from './work-post.module.scss'


export default ({ data }) => {
	const post = data.markdownRemark
	return (
        <Layout>
			<SEO title={`${post.frontmatter.title} -`} keywords={[`work`, `portfolio`, `design`]} />

			<div className={css.wrapper}>

				{post.frontmatter.images.map(({ image }) => (
					<div>
						<p>{image}</p>
						{/* <GatsbyImage image={image.fluid} className={css.heroImage} /> */}
					</div>
				))}

				<div className={css.info}>

					<h2 className={css.title}>{post.frontmatter.title}</h2>

					<div className={css.description} dangerouslySetInnerHTML={{ __html: post.html }} />

				</div>
				
			</div>

		</Layout>
    );
}

export const query = graphql`query ($slug: String!) {
	markdownRemark(fields: {slug: {eq: $slug}}) {
   	html
    	frontmatter {
      	title
			images {
				childImageSharp {
					gatsbyImageData(width: 200)
				 }
			}
    	}
  	}
}
`
