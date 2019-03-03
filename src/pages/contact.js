import React from 'react'

import { Link } from 'gatsby'

import Layout from '../components/layout'

import Container from "../components/container"

import css from "./contact.module.scss"



export default () => (
	<Layout>

		<div className={css.info}>
			<div className={css.description}>

				<h2>If you're interested in any of my work</h2>
				<p>or have questions about potential projects, collaborations or anything else please get in touch.</p>

			</div>
				

			<div className={css.further}>
				<h2>You can email me at -</h2>
				<p><Link to="mailto:contact@chrisdunkley.net">contact at chris dunkley dot net</Link></p>

				<h2>Or contact me online at -</h2>
				<p>
					<Link to="https://instagram.com/chrisdunkley">Instagram</Link>, <Link to="https://behance.net/ChrisDunkley">Behance</Link>, <Link to="https://www.linkedin.com/in/chrisjdunkley/">Linkedin</Link>
				</p>
			</div>
		</div>

	</Layout>
)
