import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import ContactBlock from './ContactBlock'
import { LimitedContainer } from './Containers'
import { palette } from './constants'

const FooterEl = styled.footer`
  background: ${palette.darkRed};
  color: ${palette.white};
  padding: 48px 0 16px;
  margin-top: 48px;

  a {
    color: ${palette.white};
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  a:focus-visible {
    outline: 3px solid rgba(250, 250, 250, 0.35);
    outline-offset: 3px;
  }
`

const Grid = styled.div`
  display: grid;
  gap: 28px;
  align-items: start;

  @media (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr 1fr;
  }
`

const Title = styled.p`
  font-weight: 800;
  margin: 0 0 12px;
`

const Small = styled.p`
  margin: 0;
  opacity: 0.9;
`

const PrimaryCta = styled(Link)`
  display: inline-block;
  background: ${palette.white};
  color: ${palette.darkRed};
  font-weight: 800;
  padding: 12px 16px;
  border-radius: 10px;
  text-decoration: none;
  margin-top: 10px;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li + li {
    margin-top: 10px;
  }
`

const Legal = styled.div`
  padding-top: 24px;
  margin-top: 24px;
  border-top: 1px solid rgba(250, 250, 250, 0.2);
  font-size: 0.95rem;
`

const Footer = () => (
  <FooterEl>
    <LimitedContainer>
      <Grid>
        <div>
          <Title>Talleres y clases</Title>
          <Small>
            Si quieres profundizar con acompañamiento, consulta los próximos talleres y
            cursos.
          </Small>
          <div>
            <PrimaryCta to="/clases-y-talleres/">Ver próximos talleres</PrimaryCta>
          </div>
        </div>

        <div>
          <Title>Explorar</Title>
          <List>
            <li>
              <Link to="/publicaciones/">Blog</Link>
            </li>
            <li>
              <Link to="/servicios/biodanza">Biodanza</Link>
            </li>
            <li>
              <Link to="/servicios/danza-emocion">Danza Emoción</Link>
            </li>
            <li>
              <Link to="/servicios/biodanza-perinatal">Biodanza Perinatal</Link>
            </li>
            <li>
              <Link to="/servicios/terapia-bioenergetica">Terapia Bioenergética</Link>
            </li>
            <li>
              <Link to="/servicios/parto-y-movimiento">Parto y Movimiento</Link>
            </li>
          </List>
        </div>

        <div>
          <Title>Contacto</Title>
          <ContactBlock color="white" bold />
        </div>
      </Grid>

      <Legal>
        <Small>© {new Date().getFullYear()} Uma Zuasti</Small>
      </Legal>
    </LimitedContainer>
  </FooterEl>
)

export default Footer

