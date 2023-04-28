import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import * as css from './blog-post.module.scss'

import Seo from '../components/seo'

const BlogPost = ({ data }) => {
  let post = data.markdownRemark;
  return (
    <Layout>
      <Seo title={post.frontmatter.title} keywords={[`blog`]} />
      <div>
        <div class={css.wrapper}>
          <h2>{post.frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  );
}

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`