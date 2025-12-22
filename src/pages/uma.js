import { graphql } from "gatsby";
import React from "react";
import HoritzontalLineSeparator from "../components/HoritzontalLineSeparator";
import ImageTextBlock from "../components/ImageTextBlock";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Separator from "../components/Separator";
import { H1, H2, P } from "../components/TextStyles";

const textBlocks = [
  `Psicología clínica · Danza Emoción. Mi trabajo integra clínica, cuerpo y movimiento para acompañar procesos de transformación con profundidad, claridad y cuidado. Soy la creadora del método Danza Emoción.`,
  `Formación de posgrado en psicología perinatal y acompañamiento en etapas de transición (embarazo, parto, puerperio y crianza).`,
  `Mi recorrido inicial incluyó Biodanza y diversas formaciones en trabajo corporal y danzaterapia, que hoy nutren mi enfoque sin definir mi identidad profesional actual.`,
  `Formación e influencias en análisis bioenergético (terapia corporal), orientación junguiana y enfoques de integración cuerpo‑mente.`,
  `Formación en herramientas de intervención post‑trauma (PHMA y SEL) aplicadas en contextos humanitarios.`,
  `Formación en primeros auxilios psicológicos en crisis y emergencias (UNED).`,
  `Profundización en psicología transpersonal: "Psique y Cosmos" (Stanislav Grof y Richard Tarnas, CIIS).`,
  `Profesora autorizada en la metodología Parto y Movimiento (Nuria Vives).`
]

const detailedFormationBlocks = [
  `Postgrado en Psicología Perinatal, pionera en Biodanza Perinatal.`,
  `Profesora Didacta de Biodanza Sistema Original nº de Reg. IBF PV1621  Milán.`,
  `Tutora en la Escuela de Formación de Profesionales de Biodanza SRT de Castellón AYUN.`,
  `Especialista en las Aplicaciones "Biodanza para niños, adolescentes y familia" (Nadia Costa) y "Biodanza para gestantes" (Claudette Sant´Anna, Scuolatoro UNIPIB Milán). Educación Biocentrica (Ruth Cavalcante) y Biodanza Clínica y social. Extensiones: "Biodanza y arcilla" y "El camino del Heroe". Formación en LABAN MOVEMENT ANALYSIS para distintos tipos de intervención en Danzaterapia.`,
  `Formación básica en DMT.`,
  `Arte-teraputa de orientación Junguiana.`,
  `Terapeuta en PHMA (Phyco Motor Healing Activitis) y SEL (Somatic emocional liberation), herramientas post trauma utilizadas con niños en los campos de refugiados de Turquía y Lebanon.`,
  `Formada en primeros auxilios psicologicos en situaciones de crisis y emergencias por UNED.`,
  `Terapeuta corporal Bioenergética, formada en el Instituto de Psicoterapia Corporal Bioenergética de Barcelona.`,
  `Ha cursado el seminario de Psicología Transpersonal "Psique y Cosmos", dictado por Stanislav Grof y Richard Tarnas, CIIS.`,
  `Profesora Autorizada en la metodología Parto y Movimiento, de Nuria Vives.`
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
        title="Trayectoria"
        description="Trayectoria y formación de Uma Zuasti. Psicología clínica y Danza Emoción, con raíces en el trabajo corporal, danzaterapia y enfoques psicocorporales."
        pathname={location?.pathname}
      />
      <Separator height="24px" />
      <H1>Trayectoria</H1>
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
