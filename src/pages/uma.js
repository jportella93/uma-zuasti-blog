import { graphql } from "gatsby";
import React from "react";
import HoritzontalLineSeparator from "../components/HoritzontalLineSeparator";
import ImageTextBlock from "../components/ImageTextBlock";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Separator from "../components/Separator";
import { H1, H2, P } from "../components/TextStyles";

const textBlocks = [
  `Soy Uma Zuasti. Integro cuerpo, emoción y palabra para acompañar procesos de transformación con presencia, claridad y cuidado.`,
  `Soy la creadora del método Danza Emoción: una síntesis madura entre danza, psicología y prácticas psicocorporales.`,
  `Investigo y aplico el movimiento como vía de regulación emocional, vínculo, creatividad y reconexión con la vida cotidiana.`,
  `Mi trayectoria incluye trabajo en distintos ámbitos y colectivos, con un enfoque que prioriza lo humano, lo seguro y lo sostenible en el tiempo.`,
  `Mis raíces están en la danzaterapia y el trabajo corporal (incluyendo Biodanza) y en diferentes enfoques que nutren mi método desde lo histórico y lo contextual.`,
  `Me he formado en acompañamiento en etapas de transición y procesos vitales, con especial atención al cuerpo y al vínculo.`,
  `También me han influido marcos humanistas y transpersonales que amplían la mirada sobre sentido, identidad y experiencia.`,
  `Más abajo encontrarás el detalle de mi formación, títulos y certificaciones.`
]

const detailedFormationBlocks = [
  `Psicóloga (P1827).`,
  `Formación básica en DMT.`,
  `Formación en Análisis del Movimiento Laban (Laban Movement Analysis).`,
  `Arte-terapeuta de orientación junguiana.`,
  `Formada en Diálogos Abiertos en Salud Mental.`,
  `Postgrado en Psicología Perinatal, pionera en Biodanza Perinatal.`,
  `Profesora Didacta de Biodanza Sistema Original nº de Reg. IBF PV1621 Milán.`,
  `Tutora en la Escuela de Formación de Profesionales de Biodanza SRT de Castellón AYUN.`,
  `Especialista en las Aplicaciones "Biodanza para niños, adolescentes y familia" (Nadia Costa) y "Biodanza para gestantes" (Claudette Sant´Anna, Scuolatoro UNIPIB Milán). Educación Biocéntrica (Ruth Cavalcante) y Biodanza Clínica y social. Extensiones: "Biodanza y arcilla" y "El camino del Héroe".`,
  `Terapeuta corporal bioenergética, formada en el Instituto de Psicoterapia Corporal Bioenergética de Barcelona.`,
  `Terapeuta en PHMA (Phyco Motor Healing Activitis) y SEL (Somatic Emotional Liberation), herramientas post-trauma utilizadas con niños en los campos de refugiados de Turquía y Líbano.`,
  `Formada en primeros auxilios psicológicos en situaciones de crisis y emergencias por UNED.`,
  `Ha cursado el seminario de Psicología Transpersonal "Psique y Cosmos", dictado por Stanislav Grof y Richard Tarnas, CIIS.`,
  `Profesora autorizada en la metodología Parto y Movimiento, de Nuria Vives.`
]

const getContentsForTextBlocks = (blocks, startIndex, finishIndex) => (
  <>
    <Separator height="24px" />
    {blocks
      .slice(startIndex, finishIndex)
      .map((textBlock, i, { length }) => (
        <>
          <P key={`${i}-${textBlock}`}>{textBlock}</P>
          {i + 1 !== length && <HoritzontalLineSeparator width="70%" />}
        </>
      ))
    }
    <Separator height="24px" />
  </>
)

const UmaPage = ({ data, location }) => {
  const fluidSrcs = data.images.nodes.map(node => node.childImageSharp?.fluid)

  const imageTextBlocks = [
    {
      fluidSrc: fluidSrcs[0],
      contentSlot: getContentsForTextBlocks(textBlocks, 0, 4),
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
      contentSlot: getContentsForTextBlocks(textBlocks, 4, 7)
    },
    {
      fluidSrc: fluidSrcs[2],
      contentSlot: getContentsForTextBlocks(textBlocks, 7)
    },
  ]

  return (
    <Layout>
      <SEO
        title="Uma"
        description="Uma Zuasti: creadora de Danza Emoción. Trayectoria, formación, títulos y certificaciones."
        pathname={location?.pathname}
      />
      <Separator height="24px" />
      <H1>Uma</H1>
      <Separator height="24px" />
      {imageTextBlocks.map((props, i) => (
        <ImageTextBlock
          shorter
          key={i}
          {...props}
          imgProps={{
            ...(props.imgProps || {}),
            alt: props.imgProps?.alt || 'Retrato de Uma Zuasti',
          }}
        />
      ))}

      <Separator height="40px" />
      <H2 textAlign="left" color="white" margin="0 auto" maxWidth="980px">
        Formación, títulos y certificaciones
      </H2>
      {getContentsForTextBlocks(detailedFormationBlocks, 0)}
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
