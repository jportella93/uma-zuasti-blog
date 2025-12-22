import { graphql } from "gatsby";
import React from "react";
import HoritzontalLineSeparator from "../components/HoritzontalLineSeparator";
import ImageTextBlock from "../components/ImageTextBlock";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Separator from "../components/Separator";
import { H1, P } from "../components/TextStyles";

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

const UmaPage = ({ data, location }) => {
  const fluidSrcs = data.images.nodes.map(node => node.childImageSharp?.fluid)

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
