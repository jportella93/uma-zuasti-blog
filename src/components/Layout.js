import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <>
    <Helmet title="Uma Zuasti" />
    <Navbar />
    {children}
  </>
)

export default TemplateWrapper
