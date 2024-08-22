import React from 'react'

import Layout from '../components/layout'


import * as css from "./404.module.scss"

const NotFoundPage = () => (
  <Layout>


    <div className={css.wrapper}>
      <h2>404</h2>
      <h2>PAGE NOT FOUND</h2>
      <p>I guess I'm supposed to write something clever here?</p>
    </div>

  </Layout>
)

export default NotFoundPage
