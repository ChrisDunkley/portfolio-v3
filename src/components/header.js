import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const ListLink = props => (
	<li style={{ display: 'inline-block', marginRight: '1rem' }}>
		<Link to={props.to}>{props.children}</Link>
	</li>
)

const Header = ({ siteTitle }) => (
	<div>
	<h1>
		<Link to="/">
			{siteTitle}
		</Link>
	</h1>
	<ul style={{
			display: 'inline-block'
		}}>
		<ListLink to="/">Work</ListLink>
		<ListLink to="/about/">About</ListLink>
		<ListLink to="/contact/">Contact</ListLink>
	</ul>
	</div>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: '',
}

export default Header
