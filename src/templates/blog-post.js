import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import Header from '../components/header'

import MoreNotes from "../components/notes/morenotes"

import { SEO } from "../components/seo"

import * as css from './blog-post.module.scss'




export default function BlogPostTemplate({ data, children }) {
  const post = data.mdx


  return (
    <Layout>

      <SEO title={post.frontmatter.title + " - Chris Dunkley"} />

      <Header />

      <article className={css.wrapper}>
        <div className={css.note}>
          <div className={css.noteHeader}><h2 className={css.title}><span>Notes on...</span><br /> {post.frontmatter.title}</h2>
            <p className={css.date}>{post.frontmatter.date}</p>
          </div>

          <div className={css.noteBody} dangerouslySetInnerHTML={{ __html: post.body }} />

        </div>
      </article>

      <MoreNotes />


    </Layout >
  )
}

export const query = graphql`
    query BlogPostQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
                date(formatString: "DD.MM.YY")
            }
        }
    }
`
