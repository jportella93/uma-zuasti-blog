import React from 'react'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import './all.sass'

const Layout = ({ children, bgColor, navbarColor }) => (
  <>
    <Helmet title="Uma Zuasti" />
    <Navbar navbarColor={navbarColor} />
    <Page bgColor={bgColor}>
      {children}
    </Page>
  </>
)

export default Layout
