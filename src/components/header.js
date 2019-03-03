import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import logo from '../images/logo.svg'

import css from './header.module.scss'

const Header = ({ siteTitle }) => (
	<header>
		<div className={css.wrapper}>
			<Link className={css.logo} to="/"><img alt="Chris Dunkley Logo" src={logo} /></Link>

			<ul className={css.nav}>
				<li><Link to="/"><h1>{siteTitle}</h1></Link></li>
				<li><Link to="/">Work</Link></li>
				<li><Link to="/info/">Info</Link></li>
				<li><Link to="/contact/">Contact</Link></li>
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
