import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Header from "../components/header"

import { GatsbyImage } from "gatsby-plugin-image"

import * as css from './music.module.scss'

import { SEO } from "../components/seo"

const Music = ({ data }) => (
	<Layout>

		<Header />


		<h2 className={css.pageTitle}>Music recommendations</h2>


		<div className={css.wrapper}>


			{data.allMdx.nodes.map((node) => (

				< div className={css.album} key={node.id} >


					<GatsbyImage image={node.frontmatter.cover.childImageSharp.gatsbyImageData} alt="album cover" width="100%" style={{ borderRadius: "0.5em" }} />

					< div className={css.information} >

						<div className={css.description}>
							<h3 className={css.artist}>{node.frontmatter.artist}</h3>
							<h3 className={css.title}>{node.frontmatter.title}</h3>
						</div>

						<div className={css.date}>{node.frontmatter.dateMonth}<br></br>{node.frontmatter.dateYear}</div>

						<div className={css.comments} dangerouslySetInnerHTML={{ __html: node.body }} />



					</div>

				</div>
			))}
		</div >

	</Layout >
)

export default Music

export const query = graphql`{
	allMdx(filter: {frontmatter: {artist: {ne: null}}}, sort: {frontmatter: {date: DESC}}) {
		nodes {
			frontmatter {
				artist
				title
				dateMonth: date(formatString: "MM")
				dateYear: date(formatString: "YY")
				cover {
					childImageSharp {
						gatsbyImageData(width: 600)
					}
				}
			}
			id
			body
		}
	}
}`

export const Head = () => (
	<SEO title="Music recommendations - Chris Dunkley" />
)