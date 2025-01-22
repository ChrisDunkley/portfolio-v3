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

            <StaticImage
                src="Lay_Pres_01.jpg"
                alt=""
                placeholder="blurred"
                layout="fullWidth"
                className={css.heroImage}
            />

            <StaticImage
                src="Lay_Pres_02.jpg"
                alt=""
                placeholder="blurred"
                layout="fullWidth"
                className={css.heroImage}
            />

            <StaticImage
                src="Lay_Pres_03.jpg"
                alt=""
                placeholder="blurred"
                layout="fullWidth"
                className={css.heroImage}
            />

            <StaticImage
                src="Lay_Pres_04.jpg"
                alt=""
                placeholder="blurred"
                layout="fullWidth"
                className={css.heroImage}
            />




            <div className={css.info}>

                <div className={css.headings}>
                    <h2 className={css.title}>Tutorial graphics</h2>
                    <p className={css.details}>Visuals & Icons</p>
                </div>

                <div className={css.description}>
                    <p>A series of graphics and icons I created for a software tutorial. The graphics were to aid users in understanding elements of the software. I was quite happy with the clarity and colour scheme.</p>

                    <a href="https://www.behance.net/gallery/58280931/Icons-diagrams">See the full project on Behance</a>
                </div>

            </div>

        </article>

    </Layout >
)

export default WorkPost

export const Head = () => (
    <SEO title="Tutorial graphics - Chris Dunkley" />
)