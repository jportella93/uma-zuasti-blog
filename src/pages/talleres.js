import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { LimitedContainer } from '../components/Containers'
import { H1, P } from '../components/TextStyles'
import Separator from '../components/Separator'

/**
 * Legacy URL: /talleres
 * The canonical workshops listing lives at /clases-y-talleres.
 */
const TalleresLegacyPage = ({ location }) => (
  <Layout>
    <SEO
      title="Talleres"
      description="Consulta los próximos talleres y cursos."
      pathname={location?.pathname}
      noindex
    />
    <LimitedContainer>
      <Separator height="32px" />
      <H1>Próximos talleres</H1>
      <Separator height="12px" />
      <P textAlign="left">
        La lista actualizada de talleres y clases está en{' '}
        <a href="/clases-y-talleres/" style={{ textDecoration: 'underline', color: 'inherit' }}>
          Clases y talleres
        </a>
        .
      </P>
      <Separator height="32px" />
    </LimitedContainer>
  </Layout>
)

export default TalleresLegacyPage
