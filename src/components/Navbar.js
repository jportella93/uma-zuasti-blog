import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { palette } from '../components/constants'
import routes from '../components/routes'
import { A } from '../components/TextStyles'
import logoRed from '../img/logo-red.svg'
import ContactBlock from './ContactBlock'

const navbarZIndex = 50;

const Hamburguer = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${navbarZIndex + 1};
  outline: none !important;

  :hover {
    opacity: 1 !important;
  }
`

const HamburguerBars = styled.span`
&, :before, :after {
  transition: background-color 1s ease;
  background-color: ${props => props.isMenuOpen ?
    palette.red : palette.white} !important;
}
`

const OpenNavbarBg = styled.div`
  height: ${props => props.isMenuOpen ?
    '100%' : '0'};
  width: 100%;
  top: 0;
  right: 0;
  transition: all 0.5s ease;
  position: fixed;
  overflow: hidden;
  z-index: ${navbarZIndex};
  background-color: ${palette.white};
`

const NavbarLinksContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 52;
`

const LogoImgLink = styled(Link)`
  margin-top: auto;
  margin-bottom: 70px;
  text-align: center;
`

const FirstNavbarLinksBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 30px;
`

const SecondNavbarLinksBlock = styled(FirstNavbarLinksBlock)`
  margin-bottom: auto;
`

const MenuItem = styled(A)`
  font-weight: bold;
  margin: 0 auto 20px;
`

const submenuItemsMap = new Map([
  ['Biodanza', 'biodanza'],
  ['Biodanza Perinatal', 'biodanza-perinatal'],
  ['Terapia Bioenergética', 'terapia-bioenergetica'],
  ['Parto y Movimiento', 'parto-y-movimiento'],
  ['Clases y Talleres', 'clases-y-talleres'],
  ['Publicaciones', 'publicaciones'],
  ['Uma', 'uma']
])

const getSubmenuItems = () => {
  const items = [];
  submenuItemsMap.forEach((routeId, title) =>
    items.push(<MenuItem
      key={title}
      to={routes.get(routeId)}
      activeStyle={{ textDecoration: 'underline' }}
      color={palette.red}
    >
      {title}
    </MenuItem>
    ))
  return items
}

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const submenuItems = getSubmenuItems();

  return (
    <>
      <Hamburguer
        className={`hamburger hamburger--spring ${isMenuOpen ? 'is-active' : ''}`}
        onClick={() => setMenuOpen(!isMenuOpen)}
        type="button">
        <span className="hamburger-box">
          <HamburguerBars isMenuOpen={isMenuOpen} className="hamburger-inner"></HamburguerBars>
        </span>
      </Hamburguer>

      <OpenNavbarBg isMenuOpen={isMenuOpen}>
        <NavbarLinksContainer>

          <LogoImgLink to={routes.get('home')}>
            <img src={logoRed} alt="Uma Zuasti logo."/>
          </LogoImgLink>

          <FirstNavbarLinksBlock>
            {submenuItems.slice(0, 4)}
          </FirstNavbarLinksBlock>

          <SecondNavbarLinksBlock>
            {submenuItems.slice(4)}
          </SecondNavbarLinksBlock>

          <ContactBlock color="red" bold={true} />

        </NavbarLinksContainer>
      </OpenNavbarBg>
    </>
  )
}

export default Navbar
