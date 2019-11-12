import {Link} from 'gatsby'
import React from 'react'
import styled, {css} from 'styled-components'
import {palette} from '../components/constants'
import logoRed from '../img/logo-red.svg'
import mailRed from '../img/mail-red.svg'
import phoneRed from '../img/phone-red.svg'

const navbarZIndex = 50;

const textStyle = css`
  span, a {
    color: ${palette.red};
    font-weight: bold;

    &:hover {
      color: ${palette.red};
      text-decoration: underline;
    }
  }
`

const MenuItem = styled(Link)`
  margin: 0 auto 20px;
`

const linkActiveStyle = {
  textDecoration: 'underline',
  fontWeight: 'bold',
}

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
  ${textStyle}
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

const ContactBlock = styled(FirstNavbarLinksBlock)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 50%;
  margin: 0 auto 50px;
`

const FirstContactLink = styled.a`
  margin-bottom: 24px;
`

const ContactItemBlock = styled.div`
  display: flex;
  align-items: center;
`

const ContactItemImg = styled.img`
  margin-right: 14px;
`

const submenuItemsMap = new Map([
  ['Biodanza', '/servicios/biodanza'],
  ['Biodanza Perinatal', '/servicios/biodanza-perinatal'],
  ['Terapia Bioenergética', '/servicios/terapia-bioenergetica'],
  ['Parto y Movimiento', '/servicios/parto-y-movimiento'],
  ['Clases y Talleres', '/clases-y-talleres'],
  ['Publicaciones', '/publicaciones'],
  ['Uma', '/uma'],
])

const getSubmenuItems = () => {
  const items = [];
  submenuItemsMap.forEach((path, title) =>
    items.push(<MenuItem
      key={title}
      to={path}
      activeStyle={linkActiveStyle}
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

          <LogoImgLink to="/">
            <img src={logoRed} />
          </LogoImgLink>

          <FirstNavbarLinksBlock>
            {submenuItems.slice(0, 4)}
          </FirstNavbarLinksBlock>

          <SecondNavbarLinksBlock>
            {submenuItems.slice(4)}
          </SecondNavbarLinksBlock>

          <ContactBlock>

            <FirstContactLink href="mailto:umazuasti@gmail.com">
              <ContactItemBlock>
                <ContactItemImg src={mailRed} />
                <span>umazuasti@gmail.com</span>
              </ContactItemBlock>
            </FirstContactLink>

            <a href="tel:636231517">
              <ContactItemBlock>
                <ContactItemImg src={phoneRed} />
                <span>636231517</span>
              </ContactItemBlock>
            </a>

          </ContactBlock>

        </NavbarLinksContainer>
      </OpenNavbarBg>
    </>
  )
}

export default Navbar
