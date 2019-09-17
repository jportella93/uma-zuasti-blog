import {Link} from 'gatsby'
import React from 'react'
import useResizeAware from 'react-resize-aware'
import styled from 'styled-components'
import {smallScreenLimit} from '../components/constants'
import {BasicContainer, LimitedContainer} from '../components/Containers'
import Logo from '../img/logo.svg'

const NavFoldedHeight = '80px';
const NavMaxExpandedHeight = '350px';

const NavContainer = styled(BasicContainer)`
  position: fixed;
  z-index: 100;
  width: 100%;
  background: rgb(203, 46, 89);
`

const NavPusher = styled.div`
  height: ${NavFoldedHeight};
`

const Nav = styled(LimitedContainer)`
  margin: auto;
  max-height: ${props => props.isMenuOpen ?
    NavMaxExpandedHeight : NavFoldedHeight};
  transition: max-height 1s ease;
  overflow: hidden;
  margin-bottom: ${props => props.isMenuOpen ?
    "10px" : "0px"};
`

const TopLevelDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledLogo = styled(Logo)`
  margin-left: -12px;

  path {
    fill: #fafafa;
  }
`

const FoldableSubmenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SubmenuContainer = styled.div`
  display: flex;
  width: 55%;
  justify-content: space-between;
`

const MenuItemBigScreen = styled(Link)`
  color: #fafafa;

  :hover {
    text-decoration: underline;
    color: #fafafa;
  }
`

const linkActiveStyle = {
  textDecoration: 'underline',
  fontWeight: 'bold',
}

const MenuItemSmallScreen = styled(MenuItemBigScreen)`
  margin-bottom: 25px;
`

const submenuItemIds = [
  'Servicios',
  'Publicaciones',
  'Talleres',
  'Testimonios',
  'Contacto',
]

const getSubmenuItems = (isSmallScreen) => {
  const MenuItem = isSmallScreen ? MenuItemSmallScreen : MenuItemBigScreen;
  return submenuItemIds.map(id =>
    <MenuItem
      key={id}
      to={`/${id.toLowerCase()}`}
      activeStyle={linkActiveStyle}
    >
      {id}
    </MenuItem>)
}

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [resizeListener, sizes] = useResizeAware();

  const showSmallScreenMenu = sizes.width < smallScreenLimit;

  if (isMenuOpen && !showSmallScreenMenu) setMenuOpen(false);

  return (
    <>
      <NavContainer>
        <Nav isMenuOpen={isMenuOpen}>
          {resizeListener}
          <TopLevelDiv>
            <Link to="/">
              <StyledLogo alt="Uma Zuasti" />
            </Link>
            {!showSmallScreenMenu &&
              <SubmenuContainer>
                {getSubmenuItems(false)}
              </SubmenuContainer>
            }
            {showSmallScreenMenu &&
              <button
                className={`hamburger hamburger--spring ${isMenuOpen ? 'is-active' : ''}`}
                onClick={() => setMenuOpen(!isMenuOpen)}
                type="button">
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            }
          </TopLevelDiv>
          {showSmallScreenMenu &&
            <FoldableSubmenuContainer>
              {getSubmenuItems(true)}
            </FoldableSubmenuContainer>
          }
        </Nav>
      </NavContainer>
      <NavPusher />
    </>
  )
}
export default Navbar
