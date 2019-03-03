import React from 'react'

import { graphql } from "gatsby"

import Layout from '../components/layout'
import Container from "../components/container"

import styles from "./music.module.scss"


const Album = props => (
	<div className={styles.album}>
		<img src={props.cover} className={styles.cover} alt="" />
		<div className={styles.information}>
			<h2 className={styles.artist}>{props.artist}</h2>
			<h2 className={styles.title}>{props.title}</h2>
			<p className={styles.comments}>{props.comments}</p>
		</div>
	</div>
)


const Page = (props) => (

	<Layout>
		
		<Container>

			<h1>Music for my brother</h1>
			<Album
				artist="Jane Doe"
				title="The End of Silences"
				cover="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
				comments="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
			/>
			<Album
				artist="Bob Smith"
				title="Skee Mask"
				cover="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
				comments="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
			/>
		</Container>
	</Layout>

)

export default Page





export const pageQuery = graphql`
	query {
		headerImage: file(relativePath: { eq: "images/portrait.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 300) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`