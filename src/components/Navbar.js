import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand" style={{display: 'flex', flexDirection: 'column'}}>
        <Link to="/" className="navbar-item"
        style={{margin: '0 auto'}}>
          <figure className="image">
            <img src={logo} alt="Uma Zuasti, profesora de biodanza, número de registro: PV 1621."
            style = {{maxHeight: 'unset'}}/>
          </figure>
        </Link>
          <p style={{fontSize: '9px', margin: '0 auto'}}>PROFESORA DE BIODANZA NÚMERO DE REGISTRO: PV 1621.</p>
      </div>
    </div>
  </nav>
)

export default Navbar
