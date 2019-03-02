import { Link } from 'gatsby'
import React from 'react'

const Footer = ({ siteTitle }) => (
	<footer>
		© {new Date().getFullYear()} Chris Dunkley, unless otherwise stated.
		{` `}
		<a href="https://www.gatsbyjs.org">Back to top.</a>
	</footer>
)

export default Footer