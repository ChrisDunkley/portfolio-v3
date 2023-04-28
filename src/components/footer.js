import React from 'react'


import { StaticImage } from "gatsby-plugin-image"


const Footer = ({ siteTitle }) => (
	<footer>

		<StaticImage alt="Ghost Crab" src='../images/logo.svg' imgClassName="footer-logo" placeholder="blurred" objectFit="contain" layout="constrained" style={{width: '70px', height: '45px'}} />

		<p>© {new Date().getFullYear()} Chris Dunkley, unless otherwise stated. <a href="#top">Back to top.</a></p>
	</footer>
)

export default Footer