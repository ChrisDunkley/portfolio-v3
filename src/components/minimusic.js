import React from 'react'

import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"

import * as css from './mini.module.scss'

export default function MiniMusic() {
	const data = useStaticQuery(graphql`{
  allMdx(filter: {frontmatter: {artist: {ne: null}}}, sort: {frontmatter: {date: DESC}}, limit:5) {
    nodes {
      frontmatter {
        artist
        title
      }
    }
	totalCount
  }
}`)

	return (
		<div className={css.list}>

			<div className={css.breaker}></div>

			<h4>Music</h4>
			<ul>
				{data.allMdx.nodes.map((node, index) => (

					<li>{node.frontmatter.artist} - {node.frontmatter.title} <span className={css.noteNumber}>{data.allMdx.totalCount - index}</span></li>

				))}

				<li className={css.final}><a href="/music">View full list</a> <span className={css.noteNumber}>{data.allMdx.totalCount}</span></li>

			</ul>
		</div>
	)
}