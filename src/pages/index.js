import React from 'react'

import { Link } from 'gatsby'

import Layout from '../components/layout'
import Header from "../components/header"

import Music from "../components/minimusic"
import Notes from "../components/mininotes"

import { StaticImage } from "gatsby-plugin-image"

import * as css from './index.module.scss'

import { SEO } from "../components/seo"

import portrait from '../images/portrait.jpg'

const Index = () => (
	<Layout>

		<Header />



		<div className={css.main}>


			<section className={css.projects}>


				<div className={css.bigbox}>
					<Link to="blue-dust" style={{ backgroundColor: "#97acd7" }}>
						<StaticImage
							src="blue-dust/thumb.jpg"
							alt=""
							placeholder="blurred"


						/>
						<div className={css.info}>
							<h2>Blue Dust</h2>
							{/* <p className={css.tags}>visual identity</p> */}
							<p className={css.number}>01</p>
						</div>
					</Link>
				</div>


				<div className={css.bigbox}>
					<Link to="wedding-invite" style={{ backgroundColor: "#A33923" }}>

						<StaticImage
							src="wedding-invite/thumb.png"
							alt=""
							placeholder="blurred"


						/>

						<div className={css.info}>
							<h2>Wedding</h2>
							{/* <p className={css.tags}>print design, web design</p> */}
							<p className={css.number}>02</p>
						</div>

					</Link>
				</div>


				<div className={css.bigbox}>
					<Link to="pixel-shooter" style={{ backgroundColor: "#9c7546" }}>
						<StaticImage
							src="pixel-shooter/thumb.jpg"
							alt=""
							placeholder="blurred"

						/>
						<div className={css.info}>
							<h2>Pixel shooter</h2>
							{/* <p className={css.tags}>pixel art, visual design, game design</p> */}
							<p className={css.number}>03</p>
						</div>
					</Link>
				</div>


				<div className={css.bigbox}>
					<Link to="banners" style={{ backgroundColor: "#ef6a54" }}>

						<StaticImage
							src="banners/thumb.jpg"
							alt=""
							placeholder="blurred"


						/>

						<div className={css.info}>
							<h2>Blog post banners</h2>
							{/* <p className={css.tags}>graphic design</p> */}
							<p className={css.number}>04</p>
						</div>
					</Link>
				</div>



				<div className={css.bigbox}>
					<Link to="presentation" style={{ backgroundColor: "#46C4A5" }}>

						<StaticImage
							src="presentation/thumb.jpg"
							alt=""
							placeholder="blurred"


						/>


						<div className={css.info}>
							<h2>Tutorial graphics</h2>
							{/* <p className={css.tags}>graphic design, instructional design</p> */}
							<p className={css.number}>05</p>
						</div>
					</Link>
				</div>

				<div className={css.bigbox}>

					<Link to="learning-design" style={{ backgroundColor: "#494954" }}>
						<StaticImage
							src="learning-design/thumb.png"
							alt=""
							placeholder="blurred"
							height="340"


						/>
						<div className={css.info}>
							<h2>Learning design</h2>
							{/* <p className={css.tags}>various templates and layouts</p> */}
							<p className={css.number}>06</p>
						</div>
					</Link>
				</div>


			</section>

			<aside className={css.sidebar}>

				<Music />

				<Notes />

				<div className={css.copyright}>
					ver. 4 million<br />
					Site design, code and content <br />
					© Chris Dunkley {new Date().getFullYear()}
				</div>

			</aside>

		</div >

		{/* <div className={css.archive}>
			<Link to="archive">Archive</Link>
		</div> */}




		< div className={css.bioWrapper} id="about" >

			<div className={css.bio}>
				<div className={css.intro}>
					<h2>For over a decade I've endeavoured to create excellent and thoughtful design.</h2>
				</div>
				<div className={css.description}>
					<p>This goal has lead me to game design, graphic design, web development and learning design - a wide range of experiences that I hope have made me a well-rounded and principled designer. Right now I'm focused on graphic design and illustration, but am interested in hearing about projects of any kind or scale.</p>

					<p>I am currently based in Melbourne, Australia.</p>

				</div>
			</div>

			<div className={css.portrait} style={{ backgroundImage: `url(${portrait})` }}></div>


			<div className={css.socials}>

				<h2>You can contact me via —</h2>
				<p>
					<Link to="contact">Email</Link>, <a href="https://www.linkedin.com/in/chrisjdunkley/">Linkedin</a>, <a href="https://instagram.com/chrisdunkley">Instagram</a>, <a href="https://behance.net/ChrisDunkley">Behance</a>
				</p>

				<h2>Or find me other places —</h2>

				<p>
					<a href="http://nudeonfades.com">Tumblr</a>, <a href="https://twitter.com/ChrisDunkley">Twitter</a>
				</p>
			</div>
		</div >

	</Layout >

)

export default Index

export const Head = () => (
	<SEO />
)