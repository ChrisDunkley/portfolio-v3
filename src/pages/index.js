import React from 'react'

import { Link } from 'gatsby'

import Layout from '../components/layout'

import { StaticImage } from "gatsby-plugin-image"

import * as css from './index.module.scss'

import { SEO } from "../components/seo"

const Index = () => (
  <Layout>


    <div className={css.wrapper}>

      {/* <p>Banners. Wedding. Game graphics. Japan book? Audio book. Learning design. Logo marks (crab, eworks mail, mountain logo). Various docs from eWorks</p> */}




      <div className={css.box}>
        <Link to="blue-dust" style={{ backgroundColor: "#97acd7" }}>
          <StaticImage
            src="blue-dust/thumb.jpg"
            alt=""
            placeholder="blurred"
            height="400"

          />
          <div className={css.info}>
            <h2>Blue Dust</h2>
            <p className={css.tags}>visual identity</p>
          </div>
        </Link>
      </div>

      <div className={css.box}>
        <Link to="pixel-shooter" style={{ backgroundColor: "#9c7546" }}>
          <StaticImage
            src="pixel-shooter/thumb.jpg"
            alt=""
            placeholder="blurred"
            height="400"

          />
          <div className={css.info}>
            <h2>Pixel shooter</h2>
            <p className={css.tags}>pixel art, visual design, game design</p>
          </div>
        </Link>
      </div>




      <div className={css.box}>
        <Link to="wedding-invite" style={{ backgroundColor: "#A33923" }}>

          <StaticImage
            src="wedding-invite/thumb.png"
            alt=""
            placeholder="blurred"
            height="400"

          />

          <div className={css.info}>
            <h2>Wedding</h2>
            <p className={css.tags}>print design, web design</p>
          </div>

        </Link>
      </div>



      <div className={css.box}>

        <Link to="learning-design" style={{ backgroundColor: "#494954" }}>
          <StaticImage
            src="learning-design/thumb.png"
            alt=""
            placeholder="blurred"
            height="340"

          />
          <div className={css.info}>
            <h2>Learning design</h2>
            <p className={css.tags}>various templates and layouts</p>
          </div>
        </Link>
      </div>

      <div className={css.box}>
        <Link to="banners" style={{ backgroundColor: "#ef6a54" }}>

          <StaticImage
            src="banners/thumb.jpg"
            alt=""
            placeholder="blurred"
            height="400"


          />

          <div className={css.info}>
            <h2>Blog post banners</h2>
            <p className={css.tags}>graphic design</p>
          </div>
        </Link>
      </div>

      <div className={css.box}>
        <Link to="presentation" style={{ backgroundColor: "#46C4A5" }}>

          <StaticImage
            src="presentation/thumb.jpg"
            alt=""
            placeholder="blurred"
            height="280"

          />


          <div className={css.info}>
            <h2>Tutorial graphics</h2>
            <p className={css.tags}>graphic design, instructional design</p>
          </div>
        </Link>
      </div>

      {/* <div className={css.box} style={{ backgroundColor: "rgb(226 224 224)", borderRadius: "8px" }}>

      </div> */}





    </div>

    {/* <div className={css.bio}>

			<div className={css.wrapper}>
				<h2>Chris Dunkley</h2>
				
				<div className={css.section}>
					<h3>graphic designer & illustrator</h3>
					<p>Freelance graphic designer and illustrator currently based in Melbourne, Australia.</p>
					<p>Creating work that is fun, clean, and always client-focused</p>
					<p>learning new skills with each opportunity.</p>
					<p>Previous work includes independent games, music artists, record labels, apparel, education, and activism.</p>
				</div>

				<div className={css.section}>
					<h3>current work — freelancing</h3>
					<p>Currently seeking freelance opportunities in games, music, media, and other exciting projects.</p>
					<p>If interested, feel free to reach out and send me an <Link to="contact">email</Link>.</p>
				</div>

			</div>

		</div>
		 */}

  </Layout >
)

export default Index

export const Head = () => (
  <SEO />
)