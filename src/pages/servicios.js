import {Link} from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {FlowerButton} from '../components/Buttons';
import {LimitedContainer} from '../components/Containers';
import Layout from '../components/Layout';
import {H1, H2, P} from '../components/TextStyles.js';
import Biodanza1 from '../img/biodanza1.jpg';
import Biodanza2 from '../img/biodanza2.jpg';
import Biodanza3 from '../img/biodanza3.jpg';

const ImgTextWrapper = styled.div`
  position: relative;
`

const FullImg = styled.div`
  width:100%;
  height: 350px;
  background-size: cover;
  background-position: ${props => props.position || 'center'};
  background-image: url(${props => props.src});
`

const TextOverImg = styled(H1)`
  color: #fafafa;
  position: absolute;
  bottom: 0;
  text-shadow: 1px 1px 5px #0a0a0a;
`

const BlockHeading = styled(H2)`
`

const ServiciosView = () => {
  return (
    <Layout>
      <Helmet title={`Servicios`} />
      <LimitedContainer verticalPadding={true}>

        <article>
          <ImgTextWrapper>
            <FullImg src={Biodanza1} position='right' />
            <TextOverImg>Biodanza</TextOverImg>
          </ImgTextWrapper>
          <BlockHeading>Qué es?</BlockHeading>
          <P>Quis veniam irure aliquip minim adipisicing labore qui do. Nisi magna anim aliquip excepteur minim.</P>
          <FullImg src={Biodanza2} />
          <BlockHeading>Como es?</BlockHeading>
          <P>Consectetur ad et aute proident ad. Dolor Lorem aliquip nisi nulla duis elit pariatur consectetur incididunt.</P>
          <FullImg src={Biodanza3} />
          <BlockHeading>A quien va dirigido?</BlockHeading>
          <P>Eiusmod veniam cillum laboris amet. Labore enim est commodo incididunt dolor.</P>
          <Link to='/servicios/biodanza'><FlowerButton>Probar una clase gratis</FlowerButton></Link>
        </article>

        <hr />

        <article>
          <ImgTextWrapper>
            <FullImg src='https://picsum.photos/350' />
            <TextOverImg>Bioenergética</TextOverImg>
          </ImgTextWrapper>
          <BlockHeading>Qué es?</BlockHeading>
          <P>Quis veniam irure aliquip minim adipisicing labore qui do. Nisi magna anim aliquip excepteur minim.</P>
          <FullImg src='https://picsum.photos/350' />
          <BlockHeading>Como es?</BlockHeading>
          <P>Consectetur ad et aute proident ad. Dolor Lorem aliquip nisi nulla duis elit pariatur consectetur incididunt.</P>
          <FullImg src='https://picsum.photos/350' />
          <BlockHeading>A quien va dirigido?</BlockHeading>
          <P>Eiusmod veniam cillum laboris amet. Labore enim est commodo incididunt dolor.</P>
          <FlowerButton>Probar una clase gratis</FlowerButton>
        </article>

        <hr />

        <article>
          <ImgTextWrapper>
            <FullImg src='https://picsum.photos/350' />
            <TextOverImg>Parto y movimiento</TextOverImg>
          </ImgTextWrapper>
          <BlockHeading>Qué es?</BlockHeading>
          <P>Quis veniam irure aliquip minim adipisicing labore qui do. Nisi magna anim aliquip excepteur minim.</P>
          <FullImg src='https://picsum.photos/350' />
          <BlockHeading>Como es?</BlockHeading>
          <P>Consectetur ad et aute proident ad. Dolor Lorem aliquip nisi nulla duis elit pariatur consectetur incididunt.</P>
          <FullImg src='https://picsum.photos/350' />
          <BlockHeading>A quien va dirigido?</BlockHeading>
          <P>Eiusmod veniam cillum laboris amet. Labore enim est commodo incididunt dolor.</P>
          <FlowerButton>Probar una clase gratis</FlowerButton>
        </article>
      </LimitedContainer>
    </Layout>
  )
}

export default ServiciosView;
