import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { GatsbyImage } from "gatsby-plugin-image";

import css from './music.module.scss'
 
const Index = ({ data }) => (
	<Layout>
		<SEO title="Good Music -" keywords={[`music`, `recommendations`, `albums`]} />
		
		<div className={css.wrapper}>

			<h2 className={css.pageTitle}>Good Music</h2>

		</div>

	</Layout>
)

export default Index
