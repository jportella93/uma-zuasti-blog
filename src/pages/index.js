import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import jumpImg from '../img/jump.png'

const Page = styled.div`
  position: relative;
`

const TextContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  width: 60%;
  text-align: center;
  margin: auto;
`

const Title = styled.h1`
  color: #fafafa;
  font-weight: bold;
  font-size: 1.5rem;
`

const Quote = styled.h2`
  color: #fafafa;
`

const IndexPage = () => {
  return (
    <Layout>
      <Page>
        <section>
          <img src={jumpImg} alt="Gente saltando." />
          <TextContainer>
            <Title>PSICOPEDAGOGÍA CORPORAL</Title>
            <br />
            <Quote>
              La Psique de una persona y su musculatura voluntaria son funcionalmente equivalentes
            <br />
              Whilhem Reich
            </Quote>
          </TextContainer>
        </section>
      </Page>
    </Layout>
  )
}

export default IndexPage
