import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { StaticImage } from "gatsby-plugin-image"

import * as css from './header.module.scss'

const Header = ({ siteTitle }) => (
	<header id="top" className={css.header}>
		<div className={css.wrapper}>
			<Link className={css.logo} to="/"><StaticImage alt="Ghost Crab" src='../images/logo.svg' loading="eager" placeholder="blurred" objectFit="contain" layout="constrained" style={{ width: '80px', height: '80px' }} /><h1>Chris Dunkley</h1></Link>

			<ul className={css.nav}>
				<li key="work"><Link to="/">Work</Link></li>
				<li key="about"><Link to="/#about">About</Link></li>
				<li key="contact"><Link to="/contact/">Contact</Link></li>
			</ul>
		</div>

	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: '',
}

export default Header
