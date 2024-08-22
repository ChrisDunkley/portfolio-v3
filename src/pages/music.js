import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'

import { GatsbyImage } from "gatsby-plugin-image";

import * as css from './music.module.scss'

const Music = ({ data }) => (
  <Layout>


    <div className={css.wrapper}>

      <h2 className={css.pageTitle}>Music Recommendations</h2>

      {data.allMdx.nodes.map((node) => (

        < div className={css.album} key={node.id} >


          <GatsbyImage image={node.frontmatter.cover.childImageSharp.gatsbyImageData} alt="album cover" />

          < div className={css.information} >

            <h3 className={css.artist}>{node.frontmatter.artist}</h3>
            <h3 className={css.title}>{node.frontmatter.title}</h3>

            <div className={css.comments} dangerouslySetInnerHTML={{ __html: node.body }} />

            <p className={css.date}>{node.frontmatter.date}</p>

          </div>

        </div>
      ))}
    </div >

  </Layout >
)

export default Music

export const query = graphql`{
  allMdx(filter: {frontmatter: {artist: {ne: null}}}) {
    nodes {
      frontmatter {
        artist
        title
        date(formatString: "D MMMM YY")
        cover {
          childImageSharp {
            gatsbyImageData(width: 300)
          }
        }
      }
      id
      body
    }
  }
}`