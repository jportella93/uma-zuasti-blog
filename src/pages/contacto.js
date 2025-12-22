import React from 'react'
import Layout from '../components/Layout'
import ContactBlock from '../components/ContactBlock'
import SEO from '../components/SEO'
import { LimitedContainer } from '../components/Containers'
import { H1, P } from '../components/TextStyles'
import Separator from '../components/Separator'

export default class ContactoPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Contacto"
          description="Reserva talleres y clases o solicita información. Contacta por email o teléfono/WhatsApp."
          pathname={this.props.location?.pathname}
        />
        <LimitedContainer>
          <Separator height="32px" />
          <H1>Contacto</H1>
          <Separator height="12px" />
          <P textAlign="left">
            Para reservar tu plaza en un taller o pedir información, escríbeme o llámame por
            WhatsApp.
          </P>
          <Separator height="16px" />
          <ContactBlock color="white" bold />
          <Separator height="24px" />
          <P textAlign="left">
            También puedes ver los <b>próximos talleres y cursos</b> en{' '}
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
