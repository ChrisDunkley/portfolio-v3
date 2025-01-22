import { Link } from 'gatsby'

import React from 'react'

import { StaticImage } from "gatsby-plugin-image"

import * as css from './menu.module.scss'

const Menu = ({ children }) => (
	<section className={css.heroWrapper}>

		<header className={css.menuWrapper}>
			<ul className={css.nav}>
				<li key="title"><h1>Chris Dunkley</h1></li>
				<li key="work"><Link to="/">Work</Link></li>
				<li key="about"><Link to="/about/">About</Link></li>
				<li key="contact"><Link to="/contact/">Contact</Link></li>
			</ul>

			<Link className={css.logo} to="/"><StaticImage alt="Ghost Crab" src='../images/logo.svg' loading="eager" placeholder="blurred" objectFit="contain" layout="constrained" style={{ width: '100px', height: '80px' }} /></Link>
		</header>

		<article className={css.workWrapper}>

			{children}

		</article>

	</section>

)

export default Menu
