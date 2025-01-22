import React from 'react'

import Layout from '../components/layout'
import Header from '../components/header'


import * as css from "./contact.module.scss"


const Contact = () => (
	<Layout>

		<Header />

		<div className={css.info}>
			<div className={css.description}>

				<h2>If you're interested in any of my work</h2>
				<p>or have questions about potential projects, collaborations or anything else please get in touch.</p>

			</div>

			<form method="post" data-netlify="true" name="contact">

				<label>
					Name
					<input type="text" name="name" id="name" />
				</label>
				<label>
					Email
					<input type="email" name="email" id="email" />
				</label>
				<label>
					Subject
					<input type="text" name="subject" id="subject" />
				</label>
				<label>
					Message
					<textarea name="message" id="message" rows="5" />
				</label>
				<button type="submit">Send</button>
				<input type="reset" value="Clear" />
			</form>



		</div>



	</Layout>
)

export default Contact