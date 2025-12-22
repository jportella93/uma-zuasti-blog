import _throttle from 'lodash/throttle'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { palette } from '../components/constants'
import routes from '../components/routes'
import { A } from '../components/TextStyles'
import logoRed from '../img/logo-red.svg'
import ContactBlock from './ContactBlock'

const navbarZIndex = 50;

const Hamburguer = styled.button`
  position: fixed;
  transition: all 0.3s ease;
  top: ${({ isHidden }) => isHidden ? '-60px' : '0px'};
  opacity: ${({ isHidden }) => isHidden ? '0' : '1'};
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
  background-color: ${({ isMenuOpen, navbarColor }) => {
    if (navbarColor) return navbarColor;
    return isMenuOpen ? palette.red : palette.white
  }} !important;
}
`

const OpenNavbarBg = styled.div`
  min-height: ${props => props.isMenuOpen ?
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

const LogoImgLink = styled(A)`
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

const WorkshopsCta = styled(A)`
  margin: 0 auto 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 12px;
  background: ${palette.red};
  color: ${palette.white};
  font-weight: 800;
  text-decoration: none;
`

const submenuItemsMap = new Map([
  ['Danza Emoción', 'danza-emocion'],
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

const getCurrentScrollPosition = () => window.scrollY;

const Navbar = ({ navbarColor }) => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [isNavbarHidden, setNavbarHidden] = React.useState(false);
  const lastScrollPositionRef = useRef(0)
  const isMenuOpenRef = useRef(false)

  const submenuItems = getSubmenuItems();

  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen
  }, [isMenuOpen])

  useEffect(() => {
    // Keep latest values without stale closures inside the scroll listener.
    // Ensures the hamburger always re-appears at the top.
    lastScrollPositionRef.current = getCurrentScrollPosition() || 0

    function handleScroll() {
      const newScrollPosition = getCurrentScrollPosition() || 0
      const last = lastScrollPositionRef.current || 0
      const direction = last > newScrollPosition ? 'up' : 'down'

      if (isMenuOpenRef.current) {
        lastScrollPositionRef.current = newScrollPosition
        return
      }

      if (newScrollPosition <= 0) {
        setNavbarHidden(false)
        lastScrollPositionRef.current = 0
        return
      }

      setNavbarHidden(direction === 'down')
      lastScrollPositionRef.current = newScrollPosition
    }

    const throttledHandleScroll = _throttle(handleScroll, 250)
    document.addEventListener('scroll', throttledHandleScroll)

    return () => {
      throttledHandleScroll.cancel?.()
      document.removeEventListener('scroll', throttledHandleScroll)
    }
  }, []);

  return (
    <>
      <Hamburguer
        isHidden={isNavbarHidden}
        className={`hamburger hamburger--spring ${isMenuOpen ? 'is-active' : ''}`}
        onClick={() => setMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isMenuOpen}
        type="button">
        <span className="hamburger-box">
          <HamburguerBars
            navbarColor={navbarColor}
            isMenuOpen={isMenuOpen}
            className="hamburger-inner"></HamburguerBars>
        </span>
      </Hamburguer>

      <OpenNavbarBg isMenuOpen={isMenuOpen}>
        <NavbarLinksContainer>

          <LogoImgLink to={routes.get('home')}>
            <img src={logoRed} alt="Uma Zuasti logo." />
          </LogoImgLink>

          <WorkshopsCta to={routes.get('clases-y-talleres')}>
            Ver talleres y clases
          </WorkshopsCta>

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
