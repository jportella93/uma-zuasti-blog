import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { LimitedContainer } from '../components/Containers'
import { H1, P } from '../components/TextStyles'
import Separator from '../components/Separator'

export default class TestimoniosPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Testimonios"
          description="Experiencias y resultados en talleres y sesiones. Para más información y reservas, contacta directamente."
          pathname={this.props.location?.pathname}
          noindex
        />
        <LimitedContainer>
          <Separator height="32px" />
          <H1>Testimonios</H1>
          <Separator height="12px" />
          <P textAlign="left">
            Esta página está en actualización. Si quieres conocer detalles de un taller o
            reservar tu plaza, visita{' '}
            <a href="/clases-y-talleres/" style={{ textDecoration: 'underline', color: 'inherit' }}>
              Clases y talleres
            </a>
            .
          </P>
          <Separator height="32px" />
        </LimitedContainer>
      </Layout>
    )
  }
}
