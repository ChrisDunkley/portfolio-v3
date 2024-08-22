import React from "react"
import Layout from "../../components/layout"

import { StaticImage } from "gatsby-plugin-image"

import { SEO } from "../../components/seo"

import * as css from '../work.module.scss'

const WorkPost = () => (
    <Layout>


        <div className={css.wrapper}>

            <StaticImage
                src="layout_banner_04_extra.png"
                alt=""
                placeholder="blurred"
                layout="fullWidth"
                className={css.heroImage}
            />

            <StaticImage
                src="layout_banner_01.png"
                alt=""
                placeholder="blurred"
                layout="fullWidth"
                className={css.heroImage}
            />

            <StaticImage
                src="layout_banner_02.png"
                alt=""
                placeholder="blurred"
                layout="fullWidth"
                className={css.heroImage}
            />

            <StaticImage
                src="layout_banner_03.png"
                alt=""
                placeholder="blurred"
                layout="fullWidth"
                className={css.heroImage}
            />

            <StaticImage
                src="layout_banner_07.png"
                alt=""
                placeholder="blurred"
                layout="fullWidth"
                className={css.heroImage}
            />




            <div className={css.info}>

                <div className={css.headings}>
                    <h2 className={css.title}>Blog post banners</h2>
                    <p className={css.details}>Graphic design</p>
                </div>

                <div className={css.description}>

                    <p>A series of banners I created for blog posts about educational software.</p>

                    <p>This project gave me a good opportunity to experiment with a variety of colours and styles.</p>

                    <a href="https://www.behance.net/gallery/62622005/Banner-Collection">See the full project on Behance</a>
                </div>

            </div>

        </div>

    </Layout>
)

export default WorkPost

export const Head = () => (
    <SEO title="Blog post banners - Chris Dunkley" />
)