import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import SEO from '../components/seo'

import portrait from '../images/portrait.jpg'

import css from './info.module.scss'

const Page = () => (
	<Layout>
		<SEO title="Info" keywords={[`gatsby`, `application`, `react`]} />

		<div className={css.info}>
			<div className={css.description}>
				<h1>For over ten years I’ve endeavoured to create (and surround myself with) excellent and thoughtful design.</h1>

				<p>This journey has lead me through game design, web development, video production, print and graphic design and (I hope!) made me a more well-rounded designer. Right now I’m focused on graphic design and illustration, but am interested in hearing about projects of any kind or scale.</p>

				<p>I am currently based in Melbourne, Australia where I live with my wife. On weekends you will find me at a movie, shopping in the city or more likely at home - playing a favourite game or working on a personal design project.</p>

				<h2>You can find me on -</h2>
				<p>
					<a href="https://instagram.com/chrisdunkley">Instagram</a>, <a href="https://behance.net/ChrisDunkley">Behance</a>, <a href="https://www.linkedin.com/in/chrisjdunkley/">Linkedin</a>
				</p>

				<h2>And in other places -</h2>

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