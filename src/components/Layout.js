import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Page from '../components/Page'
import "./bulma.min.css";
import "./hamburgers.min.css";
import { GlobalStyles } from './TextStyles'

const Layout = ({ children, bgColor, navbarColor }) => (
  <>
    <GlobalStyles />
    <Navbar navbarColor={navbarColor} />
    <Page bgColor={bgColor}>
      {children}
      <Footer />
    </Page>
  </>
)

export default Layout
