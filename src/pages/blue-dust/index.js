import React from "react"
import Layout from "../../components/layout"

import { StaticImage } from "gatsby-plugin-image"

import Seo from '../../components/seo'

import * as css from '../work.module.scss'

const WorkPost = () => (
    <Layout>
        <Seo title="Blue Dust -" keywords={[`graphic design`, `audio book`, `chris dunkley`]} />

        <div className={css.wrapper}>

            <StaticImage
                src="complete_big.jpg"
                alt=""
                placeholder="blurred"
                layout="constrained"
                objectFit="contain"
                className={css.wideScreenBanner}
            />


            <div className={css.info}>

                <div className={css.headings}>
                    <h2 className={css.title}>Blue Dust</h2>
                    <p className={css.details}>A sci-fi audio series</p>
                    <p className={css.details}>2022</p>
                </div>

                <div className={css.description}>

                    <p>I had the opportunity to design a graphic for the audio series, Blue Dust.</p>

                    <a href="https://podcasts.apple.com/au/podcast/blue-dust/id1655027918">Listen to the series on Apple Podcasts</a>

                    <p>The graphic is displayed primarily as an icon for each episode and was created through conversation with the series' creator to subtly evoke imagery from the story while remaining obscure enough to let the listener find their own interpretation.</p>

                    <p>Multiple ideas were explored before a final design was decided upon.</p>


                </div>

            </div>

        </div>



        <div className={css.row} style={{ paddingTop: '0' }}>

            <div className={css.third}>
                <StaticImage
                    src="logo_01.png"
                    alt=""
                    placeholder="blurred"
                    layout="fullWidth"
                    className={css.half}
                />
                <StaticImage
                    src="logo_02.png"
                    alt=""
                    placeholder="blurred"
                    layout="fullWidth"
                    className={css.half}
                />

                <StaticImage
                    src="logo_03.png"
                    alt=""
                    placeholder="blurred"
                    layout="fullWidth"
                    className={css.half}
                />
                <StaticImage
                    src="logo_04.jpg"
                    alt=""
                    placeholder="blurred"
                    layout="fullWidth"
                    className={css.half}
                />
                <p class={css.imageInfo}>Early logo explorations</p>
            </div>


            <div className={css.third}>
                <StaticImage
                    src="subsection.png"
                    alt=""
                    placeholder="blurred"
                    layout="fullWidth"
                    className={css.full}
                />
                <p class={css.imageInfo}>Final detail</p>
            </div>


            <div className={css.third}>
                <StaticImage
                    src="logo_alt.jpg"
                    alt=""
                    placeholder="blurred"
                    layout="fullWidth"
                    className={css.full}
                />
                <p class={css.imageInfo}>Alternative layout</p>
            </div>

        </div>


    </Layout>
)

export default WorkPost