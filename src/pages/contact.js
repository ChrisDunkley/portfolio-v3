import React from 'react'

import Layout from '../components/layout'

import SEO from '../components/seo'

import css from "./contact.module.scss"


export default () => (
	<Layout>
		<SEO title="Contact" keywords={[`design`, `portfolio`, `chris dunkley`]} />

		<div className={css.info}>
			<div className={css.description}>

				<h2>If you're interested in any of my work</h2>
				<p>or have questions about potential projects, collaborations or anything else please get in touch.</p>

			</div>
				

			<div className={css.further}>
				<h2>You can email me at -</h2>
				<p><a href="mailto:chris.j.dunkley@gmail.com">chris.j.dunkley@gmail.com</a></p>

				<h2>Or contact me online at -</h2>
				<p>
					<a href="https://instagram.com/chrisdunkley">Instagram</a>, <a href="https://behance.net/ChrisDunkley">Behance</a>, <a href="https://www.linkedin.com/in/chrisjdunkley/">Linkedin</a>
				</p>
			</div>
		</div>

	</Layout>
)
