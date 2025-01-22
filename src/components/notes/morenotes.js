import React from 'react'

import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"

import * as css from './morenotes.module.scss'

export default function MiniNotes() {
	const data = useStaticQuery(graphql`{
  allMdx(filter: {frontmatter: {path: {ne: null}}}, sort: {frontmatter: {date: DESC}}, limit:10) {
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

		<div className={css.moreNotesWrapper}>

			<h3 className={css.moreHeader}>More notes</h3>

			<ul className={css.moreNotes}>
				{data.allMdx.nodes.map((node, index) => (

					<li>
						<Link to={"/notes/" + node.frontmatter.path}>{node.frontmatter.title}</Link>
					</li>

				))}

				<li></li>

			</ul>
		</div>

	)
}