import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          {/* <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </figure> */}
          Uma Zuasti
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/articulos">
          Artículos
        </Link>
        <Link className="navbar-item" to="/clases-y-talleres">
          Clases y Talleres
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
