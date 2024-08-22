import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import * as css from './blog-post.module.scss'

export default function BlogPostTemplate({ data }) {
  const post = data.mdx
  return (
    <Layout>
      <div className={css.wrapper}>
        <h2>{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
    query BlogPostQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
            }
        }
    }
`
