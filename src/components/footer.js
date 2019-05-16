import React from 'react'

const Footer = ({ siteTitle }) => (
	<footer>
		© {new Date().getFullYear()} Chris Dunkley, unless otherwise stated.
		{` `}
		<a href="#top">Back to top.</a>
	</footer>
)

export default Footer