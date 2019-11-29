import React from 'react'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <>
    <Helmet title="Uma Zuasti" />
    <Navbar />
    <Page>
      {children}
    </Page>
  </>
)

export default TemplateWrapper
