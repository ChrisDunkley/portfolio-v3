import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import logo from '../images/logo.svg'

const Header = ({ siteTitle }) => (
	<header>

		<div class="wrapper">
			<Link className='logo' to="/"><img src={logo} /></Link>

			<ul class="nav">
				<li><Link className="mobile-hide" to="/"><h1>{siteTitle}</h1></Link></li>
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
