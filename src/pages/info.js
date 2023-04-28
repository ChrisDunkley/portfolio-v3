import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import Seo from '../components/seo'

import portrait from '../images/portrait.jpg'

import * as css from './info.module.scss'

const Page = () => (
	<Layout>
		<Seo title="Info -" keywords={[`description`, `information`]} />

		<div className={css.info}>
			<div className={css.description}>
				<h2>For more than a decade I've endeavoured to create (and surround myself with) excellent and thoughtful design.</h2>

				<p>This goal has lead me to game design, graphic design, web development and learning design - a wide range of experiences that I hope have made me a well-rounded and principled designer. Right now I'm focused on graphic design and illustration, but am interested in hearing about projects of any kind or scale.</p>

				<p>I am currently based in Melbourne, Australia where I live with my wife and two sons.</p>

				<h2>You can find me on —</h2>
				<p>
					<a href="https://instagram.com/chrisdunkley">Instagram</a>, <a href="https://behance.net/ChrisDunkley">Behance</a>, <a href="https://www.linkedin.com/in/chrisjdunkley/">Linkedin</a>
				</p>

				<h2>And in other places —</h2>

				<p>
					<Link to="/music/">Music</Link>, <a href="http://nudeonfades.com">Tumblr</a>, <a href="https://twitter.com/ChrisDunkley">Twitter</a>
				</p>
			</div>

			<div className={css.portrait}>
				<img alt="Portrait" src={portrait} />
			</div>
		</div>

	</Layout>
)

export default Page