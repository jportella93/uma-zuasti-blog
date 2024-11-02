import React from 'react'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import "./bulma.min.css";
import "./hamburgers.min.css";
import { GlobalStyles } from './TextStyles'

const Layout = ({ children, bgColor, navbarColor }) => (
  <>
    <Helmet title="Uma Zuasti" />
    <GlobalStyles />
    <Navbar navbarColor={navbarColor} />
    <Page bgColor={bgColor}>
      {children}
    </Page>
  </>
)

export default Layout
