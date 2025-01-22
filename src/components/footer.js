import React from 'react'


import { StaticImage } from "gatsby-plugin-image"


const Footer = ({ siteTitle }) => (
	<footer>

		<StaticImage alt="Logo" src='../images/logo.svg' imgClassName="footer-logo" placeholder="blurred" objectFit="contain" layout="constrained" style={{ width: '100px', height: '50px' }} />
		<p>Thank you for your attention.</p>
	</footer>
)

export default Footer