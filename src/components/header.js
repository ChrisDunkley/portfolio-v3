import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { StaticImage } from "gatsby-plugin-image"

import * as css from './header.module.scss'

const Header = ({ siteTitle }) => (
	<header id="top">
		<div className={css.wrapper}>
			<Link className={css.logo} to="/"><StaticImage alt="Ghost Crab" src='../images/logo.svg' loading="eager" placeholder="blurred" objectFit="contain" layout="constrained" style={{width: '100px', height: '80px'}} /><h1>Chris<br/>Dunkley</h1></Link>

			<ul className={css.nav}>
				<li key="work"><Link to="/">Work</Link></li>
				<li key="info"><Link to="/info/">Info</Link></li>
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
