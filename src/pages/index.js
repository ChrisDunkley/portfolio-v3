import React from 'react'

import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import css from './index.module.scss'

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import box01 from "../work/images/banners/thumb.jpg"
import box02 from "../work/images/wedding-invite/thumb.jpg"
import box03 from "../work/images/presentation/thumb.jpg"
import box04 from "../work/images/support-portal/thumb.jpg"

 
const Index = ({ data }) => (
	<Layout>
		<SEO title=" " keywords={[`design`, `portfolio`, `chris dunkley`]} />
		
		<div className={css.wrapper}>

				<Link to="work/banners" className={css.box01} style={{ backgroundImage: `url(${box01})` }}>rty</Link>
				<Link to="work/invite" className={css.box02} style={{ backgroundImage: `url(${box02})` }}>vbn</Link>
				<Link to="work/presentation" className={css.box03} style={{ backgroundImage: `url(${box03})` }}>cvb</Link>
				<Link to="work/support-portal" className={css.box04} style={{ backgroundImage: `url(${box04})` }}>zxc</Link>
			
		</div>

	</Layout>
)

export default Index

