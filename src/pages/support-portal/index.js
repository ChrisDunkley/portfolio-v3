import React from "react"
import Layout from "../../components/layout"

import { StaticImage } from "gatsby-plugin-image"

import Seo from '../../components/seo'

import * as css from '../work.module.scss'

const WorkPost = () => (
	<Layout>
        <Seo title="Support portal" keywords={[`design`, `portfolio`, `chris dunkley`]} />

        <div className={css.wrapper}>

            <StaticImage 
                src="my_login.jpg"
                alt="" 
                placeholder="blurred"
                layout="fullWidth"
                className={css.heroImage}
            />
        
            <StaticImage 
                src="my_icons.jpg"
                alt="" 
                placeholder="blurred"
                layout="fullWidth"
                className={css.heroImage}
            />

            <StaticImage 
                src="my_screen.jpg"
                alt="" 
                placeholder="blurred"
                layout="fullWidth"
                className={css.heroImage}
            />
            

            

            <div className={css.info}>

                <div className={css.headings}>
                    <h2 className={css.title}>Support Portal</h2>
                </div>

                <div className={css.description}>
                    <p>This is a redesign for a support desk web portal. </p>
                    <p>The redesign was a quick project necessitated by the old portal being desperately outdated. New version aims to:</p>

                    <ol>
                        <li>Give the portal its own branding, separating it from the core business website</li>
                        <li>Prioritise important functionality and make the full range of options more obvious to the user.</li>
                    </ol>

                    <a className="big-button" href="https://www.behance.net/gallery/66063511/Support-Desk-Portal-Redesign">See the full project on Behance</a>
                </div>

            </div>
            
        </div>

    </Layout>
)

export default WorkPost