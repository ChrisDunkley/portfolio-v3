import React from "react"
import Layout from "../../components/layout"

import { StaticImage } from "gatsby-plugin-image"
import { SEO } from "../../components/seo"

import Header from '../../components/header'

import * as css from '../work.module.scss'

const WorkPost = () => (
	<Layout>


		<Header />

		<article className={css.wrapper}>
			<div className={css.info}>

				<div className={css.headings}>
					<h2 className={css.title}>Learning design</h2>
					<p className={css.details}>Templates and layouts</p>
					<p className={css.details}>2020 - 2022</p>
				</div>

				<div className={css.description}>
					<p>Over my career I have created a large range of templates, styles and visual identities for online courses.</p>

					<p>These layouts need to serve many purposes - they must be clean and easy to comprehend for students at a variety of technical levels, they must aid the education experience and meet accessibility requirements. Simultaneously the layouts must suit a massive range of educational content and be easy to quickly apply in template form.</p>

				</div>

			</div>




			<div className={css.row} style={{ paddingTop: '0' }}>


				<div className={css.half}>
					<StaticImage
						src="srgo01.png"
						alt=""
						placeholder="blurred"
						layout="fullWidth"
						className={css.full}
					/>
				</div>

				<div className={css.half}>
					<StaticImage
						src="srgo02.png"
						alt=""
						placeholder="blurred"
						layout="fullWidth"
						className={css.full}
					/>
				</div>
			</div>

			<div className={css.row} style={{ paddingTop: '0' }}>

				<div className={css.half}>
					<StaticImage
						src="srgo03.png"
						alt=""
						placeholder="blurred"
						layout="fullWidth"
						className={css.full}
					/>
				</div>

				<div className={css.half}>
					<StaticImage
						src="srgo04.png"
						alt=""
						placeholder="blurred"
						layout="fullWidth"
						className={css.full}
					/>
				</div>
			</div>


			<div className={css.row} >

				{/* <div className={css.full}><p class={css.imageInfo}>Layouts</p></div> */}

				<div className={css.half}>
					<StaticImage
						src="mcv01.png"
						alt=""
						placeholder="blurred"
						layout="fullWidth"
						className={css.full}
					/>
				</div>

				<div className={css.half}>
					<StaticImage
						src="mcv02.png"
						alt=""
						placeholder="blurred"
						layout="fullWidth"
						className={css.full}
					/>
				</div>
			</div>


			<div className={css.row} >

				{/* <div className={css.full}><p class={css.imageInfo}>Course templates</p></div> */}

				<div className={css.half}>
					<StaticImage
						src="become01.png"
						alt=""
						placeholder="blurred"
						layout="fullWidth"
						className={css.full}
					/>
				</div>

				<div className={css.half}>
					<StaticImage
						src="become02.png"
						alt=""
						placeholder="blurred"
						layout="fullWidth"
						className={css.full}
					/>
				</div>
			</div>

			<div className={css.row} style={{ paddingTop: '0' }}>
				<div className={css.half}>
					<StaticImage
						src="become03.png"
						alt=""
						placeholder="blurred"
						layout="fullWidth"
						className={css.full}
					/>
				</div>

				<div className={css.half}>
					<StaticImage
						src="become04.png"
						alt=""
						placeholder="blurred"
						layout="fullWidth"
						className={css.full}
					/>
				</div>
			</div>

		</article>







	</Layout >
)

export default WorkPost

export const Head = () => (
	<SEO title="Learning design - Chris Dunkley" />
)