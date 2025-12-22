import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { palette } from './constants'

const Card = styled.aside`
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 14px;
  padding: 18px;
  background: ${palette.white};
  text-align: left;
`

const Eyebrow = styled.p`
  margin: 0 0 8px;
  color: ${palette.darkRed};
  font-weight: 800;
  letter-spacing: 0.02em;
`

const Title = styled.p`
  margin: 0 0 8px;
  color: #111;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.2;
`

const Meta = styled.p`
  margin: 0;
  color: #333;
  line-height: 1.5;
`

const ButtonsRow = styled.div`
  display: grid;
  gap: 10px;
  margin-top: 14px;

  @media (min-width: 560px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Primary = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${palette.red};
  color: ${palette.white};
  font-weight: 800;
  padding: 12px 14px;
  text-decoration: none;
`

const Secondary = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: transparent;
  color: ${palette.red};
  border: 2px solid ${palette.red};
  font-weight: 800;
  padding: 12px 14px;
  text-decoration: none;
`

const WorkshopPromo = ({ workshop, productTypeLabel }) => {
  if (!workshop) return null

  const title = workshop?.frontmatter?.title
  const description = workshop?.frontmatter?.description
  const eventPlace = workshop?.frontmatter?.eventPlace
  const eventDates = workshop?.frontmatter?.eventDates
  const slug = workshop?.fields?.slug

  return (
    <Card aria-label="Recomendación de taller">
      <Eyebrow>{productTypeLabel ? `Taller recomendado · ${productTypeLabel}` : 'Taller recomendado'}</Eyebrow>
      <Title>{title}</Title>
      {description && <Meta>{description}</Meta>}
      {(eventPlace || eventDates) && (
        <Meta style={{ marginTop: '10px' }}>
          {eventPlace && (
            <>
              <b>Lugar:</b> {eventPlace}
              <br />
            </>
          )}
          {eventDates && (
            <>
              <b>Fechas:</b> {eventDates}
            </>
          )}
        </Meta>
      )}
      <ButtonsRow>
        <Primary to={slug}>Ver detalles del taller</Primary>
        <Secondary to="/clases-y-talleres/">Ver todos los talleres</Secondary>
      </ButtonsRow>
    </Card>
  )
}

export default WorkshopPromo

