import React from "react"
import Layout from "../../components/layout"

import { SEO } from "../../components/seo"

import { StaticImage } from "gatsby-plugin-image"

import * as css from '../work.module.scss'

import ShipLoop from './ship-loop.gif'

const WorkPost = () => (
    <Layout pageTitle="Pixel Shooter">


        <div className={css.wrapper}>

            <div style={{ textAlign: "center", backgroundColor: "rgb(5 43 92)", width: "100%", display: "inline-block" }}>
                <img src={ShipLoop} alt="" style={{ maxWidth: "100%", height: '50vh' }} />
            </div>


            <div className={css.info}>

                <div className={css.headings}>
                    <h2 className={css.title}>Pixel shooter</h2>
                    <p className={css.details}>Game and art design</p>
                </div>

                <div className={css.description}>

                    <p>Visual elements from a small game a programmer friend and I were commissioned to create back in the days of Flash.</p>

                    <p>The game was intended to promote the release of a new EP from a local hip hop group.</p>

                </div>

            </div>

            <div className="videoWrapper" style={{ textAlign: 'center', maxWidth: '100%' }} >
                <iframe width="800" height="450" src="https://www.youtube.com/embed/2mqZcSlQ1XI?rel=0&amp;controls=0&amp;showinfo=0&amp;modestbranding=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ maxWidth: '100%' }}></iframe>
            </div>

            <StaticImage
                src="ships.png"
                alt=""
                placeholder="blurred"
                layout="fullWidth"
                className={css.full}
                style={{ marginTop: '2em' }}
            />

            <StaticImage
                src="menu.png"
                alt=""
                placeholder="blurred"
                layout="fullWidth"
                className={css.full}
                style={{ marginTop: '2em' }}
            />


            <StaticImage
                src="game-over.png"
                alt=""
                placeholder="blurred"
                layout="fullWidth"
                className={css.full}
                style={{ marginTop: '2em' }}
            />



        </div>


    </Layout>
)

export default WorkPost

export const Head = () => (
    <SEO title="Pixel shooter - Chris Dunkley" />
)