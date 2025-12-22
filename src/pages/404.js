import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFoundPage = ({ location }) => (
  <Layout>
    <SEO
      title="Página no encontrada"
      description="La página solicitada no está disponible."
      pathname={location?.pathname}
      noindex
    />
    <div style={{textAlign: 'center', margin: '3em'}}>
      <h1><b>404 NOT FOUND</b></h1>
      <br/>
      <p>La página solicitada no está disponible.</p>
    </div>
  </Layout>
)

export default NotFoundPage
