import { graphql } from "gatsby";
import React from "react";
import HoritzontalLineSeparator from "../components/HoritzontalLineSeparator";
import ImageTextBlock from "../components/ImageTextBlock";
import Layout from "../components/Layout";
import Separator from "../components/Separator";
import { H1, P } from "../components/TextStyles";

const textBlocks = [
  `Terapeuta, educadora infantil e investigadora.`,
  `Postgrado en Psicología Perinatal, pionera en Biodanza Perinatal.`,
  `Profesora-Didacta de Biodanza, nº de Registro: PV 1621.`,
  `Tutora en la Escuela de Formación de Profesionales de Biodanza SRT de Castellón AYUN.`,
  `Especialista en las Aplicaciones "Biodanza para niños, adolescentes y familia" formada por Nadia Costa y  "Biodanza para gestantes" por Claudette Sant´Anna, Scuolatoro UNIPIB Milán (Italia). También en las extensiones "Biodanza y arcilla” y  "El camino del Heroe", trabajo corporal sobre algunos de los arquetipos post-junguianos.`,
  `Arte-teraputa de orientación Junguiana.`,
  `Terapeuta en PHMA, (Phyco Motor Healing Activitis) y SEL (Somatic emocional liberation), herramientas post trauma utilizadas con niños en los campos de refugiados de Turquía y Lebanon.`,
  `Formada en primeros auxilios psicologicos en situaciones de crisis y emergencias por UNED.`,
  `Terapeuta corporal Bioenergética, formada en el Instituto de Psicoterapia Corporal Bioenergética de Barcelona.`,
  `Ha cursado el seminario de Psicología Transpersonal "Psique y Cosmos", Dictado por Stanislav Grof y Richard Tarnas, CIIS.`,
  `Profesora Autorizada en la metodología Parto y Movimiento, de Nuria Vives.`
]

const getContentsForTextBlocks = (startIndex, finishIndex) => (
  <>
    <Separator height="24px" />
    {textBlocks
      .slice(startIndex, finishIndex)
      .map((textBlock, i, { length }) => (
        <>
          <P key={textBlock}>{textBlock}</P>
          {i + 1 !== length && <HoritzontalLineSeparator width="70%" />}
        </>
      ))
    }
    <Separator height="24px" />
  </>
)

const UmaPage = ({ data }) => {
  const fluidSrcs = data.images.nodes.map(node => node.childImageSharp.fluid)

  const imageTextBlocks = [
    {
      fluidSrc: fluidSrcs[0],
      contentSlot: getContentsForTextBlocks(0, 4),
      imgProps: {
        style: {
          maxWidth: '300px',
          borderRadius: '50%',
          margin: '0 auto'
        }
      }
    },
    {
      fluidSrc: fluidSrcs[1],
      contentSlot: getContentsForTextBlocks(4, 7)
    },
    {
      fluidSrc: fluidSrcs[2],
      contentSlot: getContentsForTextBlocks(7)
    },
  ]

  return (
    <Layout>
      <Separator height="24px" />
      <H1>Acerca de Uma</H1>
      <Separator height="24px" />
      {imageTextBlocks.map((props) => <ImageTextBlock shorter {...props} />)}
    </Layout>
  )
};

export const query = graphql`
  query {
      images: allFile(filter: {relativeDirectory: {eq: "uma"}}, sort: {fields: name}) {
        nodes {
          ...Fluid1200
        }
    }
  }
`;

export default UmaPage;
