import React from "react"
import Layout from "../../components/layout"

import { StaticImage } from "gatsby-plugin-image"

import { SEO } from "../../components/seo"

import * as css from '../work.module.scss'

const WorkPost = () => (
    <Layout>


        <div className={css.wrapper} style={{ paddingBottom: '0' }}>


            <StaticImage
                src="layout_invite_01.jpg"
                alt=""
                placeholder="blurred"
                layout="fullWidth"
                className={css.heroImage}
            />

            <StaticImage
                src="layout_invite_02.jpg"
                alt=""
                placeholder="blurred"
                layout="fullWidth"
                className={css.heroImage}
            />

            <StaticImage
                src="layout_invite_03.jpg"
                alt=""
                placeholder="blurred"
                layout="fullWidth"
                className={css.heroImage}
            />
        </div>


        <div className={css.row} style={{ paddingTop: '0' }}>
            <div className={css.half}>
                <StaticImage
                    src="hungry-workshop-01.jpg"
                    alt=""
                    placeholder="blurred"
                    layout="fullWidth"
                    className={css.full}
                />
            </div>

            <div className={css.half}>
                <StaticImage
                    src="hungry-workshop-02.jpg"
                    alt=""
                    placeholder="blurred"
                    layout="fullWidth"
                    className={css.full}
                />
            </div>
        </div>

        <div className={css.wrapper}>
            <div className={css.info}>

                <div className={css.headings}>
                    <h2 className={css.title}>Wedding</h2>
                    <p className={css.details}>Print design and website</p>
                    <p className={css.details}>2018</p>
                </div>

                <div className={css.description}>
                    <p>My own wedding was an opportunity to design a whole range of print items - from invites to menus and venue signage.</p>

                    <p>I wanted the design to reflect our shared tastes while matching in with other elements of the wedding such as the cake, dresses and flowers.</p>

                    <p>My partner and I worked with <a href="https://hungryworkshop.com.au/">Hungry Workshop</a> in Melbourne to have the primary invite letterpressed.</p>

                    <a href="https://www.behance.net/gallery/65310271/Wedding-invite">See more detail on Behance</a>
                </div>

            </div>
        </div>


    </Layout >
)

export default WorkPost

export const Head = () => (
    <SEO title="Wedding invite - Chris Dunkley" />
)