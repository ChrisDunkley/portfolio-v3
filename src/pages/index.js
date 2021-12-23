import React from 'react'

import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

import * as css from './index.module.scss'

import box01 from "../work/images/banners/thumb.jpg"
import box02 from "../work/images/wedding-invite/thumb.jpg"
import box03 from "../work/images/presentation/thumb.jpg"

 
const Index = ({ data }) => (
	<Layout>
		<Seo title="Portfolio" keywords={[`design`, `portfolio`, `chris dunkley`]} />
		
		<div className={css.wrapper}>

				<div className={css.bigbox}>
					<div className={css.box01}>
						<Link to="work/invite" style={{ backgroundImage: `url(${box01})` }}>
							<div className={css.info}>
								<h2>Banners</h2>
								<p className={css.tags}>dinosaurs, shapes, album cover</p>
							</div>
						</Link>
					</div>
				</div>


				<div className={css.smallbox}>
					<div className={css.box02}>
						<Link to="work/invite" style={{ backgroundImage: `url(${box02})` }}>
							<div className={css.info}>
								<h2>Invite</h2>
								<p className={css.tags}>design, boxes</p>
							</div>
						</Link>
					</div>
					<div className={css.box03}>
						<Link to="work/presentation" style={{ backgroundImage: `url(${box03})` }}>
							<div className={css.info}>
								<h2>Presentation</h2>
								<p className={css.tags}>dinosaurs, shapes, album cover</p>
							</div>
						</Link>
					</div>
				</div>
			
		</div>

	</Layout>
)

export default Index

