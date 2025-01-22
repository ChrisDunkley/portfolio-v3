import React from 'react'

import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"

import * as css from './mini.module.scss'

export default function MiniNotes() {
	const data = useStaticQuery(graphql`{
  allMdx(filter: {frontmatter: {path: {ne: null}}}, sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        title
		path
      }
    }
	totalCount
  }
}`)

	return (
		<div className={css.list}>

			<div className={css.breaker}></div>

			<h4>Notes</h4>
			<ul>
				{data.allMdx.nodes.map((node, index) => (

					<li><a href={"/notes/" + node.frontmatter.path}>{node.frontmatter.title}</a> <span className={css.noteNumber}>{data.allMdx.totalCount - index}</span></li>

				))}

				<li className={css.final}><a href="/notes/">View more notes</a> <span className={css.noteNumber}>{data.allMdx.totalCount}</span></li>

			</ul>
		</div>
	)
}