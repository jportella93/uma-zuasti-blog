import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import ContactBlock from "../components/ContactBlock";
import { LimitedContainer } from "../components/Containers";
import Foldable from "../components/Foldable";
import ImageTextBlock from '../components/ImageTextBlock';
import Layout from "../components/Layout";
import routes from "../components/routes";
import SearchIconText from '../components/SearchIconText';
import { H1, H2, H4, P, Span } from "../components/TextStyles";
import titleToSnakeCase from "../components/titleToSnakeCase";
import SEO from "../components/SEO";
import logoWhite from "../img/logo-white.svg";

const Logo = styled.img`
  margin-top: 150px;
  margin-bottom: 75px;
`;

const LogoSubtitle = styled(H4)`
  max-width: 280px;
  margin-bottom: 100px;
  line-height: 1.25;
`;

const SubtitleChunk = styled.span`
  white-space: nowrap;
`;

const WorkshopsCta = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
  padding: 12px 16px;
  border-radius: 12px;
  background: rgba(250, 250, 250, 0.14);
  border: 2px solid rgba(250, 250, 250, 0.55);
  color: rgba(250, 250, 250, 1);
  font-weight: 800;
  text-decoration: none;
`;

const TopicSearchIconText = ({ topic }) => (
  <SearchIconText link={routes.get(titleToSnakeCase(topic))}>
    <Span marginBottom="8px" textDecoration="underline">
      Sesiones de {topic}
      <br /> cerca de mí
    </Span>
  </SearchIconText>
)

const imageTextBlockMaps = [
  {
    title: "¿Qué es?",
    content:
      "Es una técnica corporal de desarrollo personal, integración afectiva y reparentalización , catalizadora de cambios.",
    footerComponent: <TopicSearchIconText topic="Biodanza" />,
    shadow: 'top'
  },
  {
    title: "¿Cómo se desarrolla?",
    content:
      "Biodanza propone una danza orgánica que responde a patrones de movimiento que originan la vida. Estos movimientos, acompañados de la música, la voz y las dinámicas grupales tienen un gran poder transformador en la existencia y producen cambios a nivel orgánico, afectivo-motor y existencial."
  },
  {
    title: "¿A quién va dirigido?",
    content:
      "Biodanza puede ayudarte si tienes dificultad para establecer vínculos profundos, inseguridad, estados depresivos, angustia, falta de ímpetu vital, estrés, ausencia de motivación existencial o simplemente quieres realizar un cambio,  desarrollar tus potenciales y mejorar tu estado de salud integral."
  },
  {
    title: "¿Con qué objetivo?",
    content:
      "Desarrollar potenciales comunicativos, afectivos y vitales que nos conecten con nosotros mismos, con el otro y con la naturaleza.",
    footerComponent: <TopicSearchIconText topic="Biodanza" />,
    shadow: 'bottom'
  },
  {
    title: "¿Qué es Danza Emoción?",
    content:
      "Danza Emoción es un método de danzaterapia creado por Uma Zuasti, enfocado en el bienestar emocional, el desarrollo de la creatividad, las habilidades sociales, la propiocepción y la interocepción. A través de la expresión corporal, la improvisación, el simbolismo y la respiración consciente, se facilita la conexión con las emociones, permitiendo su exploración, expresión e integración de manera segura y contenida.",
    footerComponent: <TopicSearchIconText topic="Danza Emoción" />, 
    shadow: 'top'
  },
  {
    title: "¿Cómo se desarrolla?",
    content:
      "El método se estructura en sesiones que combinan movimiento libre, ejercicios guiados, uso de metáforas y una parte dialogada para integrar la experiencia corporal. Esta última se inspira en el enfoque de Diálogos Abiertos en Salud Mental, fomentando la reflexión sobre lo vivido a través del cuerpo y su conexión con el mundo emocional. Las sesiones pueden adaptarse a distintos colectivos y objetivos, utilizando músicas evocadoras, elementos simbólicos y dinámicas grupales."
  },
  {
    title: "¿A quién va dirigido?",
    content:
      "Danza Emoción está dirigido a personas de todas las edades interesadas en el autoconocimiento y el bienestar emocional, incluyendo: Adultos en procesos de desarrollo personal, Mayores que buscan mantener sus capacidades psicomotoras y emocionales, Mujeres víctimas de violencia de género, Niños y adolescentes en entornos educativos."
  },
  {
    title: "¿Con qué objetivo?",
    content:
      "El objetivo principal de Danza Emoción es promover el bienestar integral, facilitando un espacio para: La exploración y expresión emocional a través del cuerpo. El fortalecimiento de la autoestima y la autopercepción. El desarrollo de la creatividad y la espontaneidad. La integración de vivencias a nivel corporal, emocional y cognitivo. La mejora de las relaciones interpersonales y la comunicación asertiva.",
    shadow: 'bottom'
  },
  {
    title: "¿Qué es?",
    content:
      "La Biodanza Perinatal te aporta los mismos beneficios que la práctica de Biodanza y además te da la oportunidad de desenvolverte entre iguales, ya que está formado por madres como tú, que tienen bebés o niños pequeños, y coordinados por una especialista, que os dará el punto de vista profesional, en los temas referentes al puerperio y la crianza.",
    footerComponent: <TopicSearchIconText topic="Biodanza Perinatal" />,
    shadow: 'top'
  },
  {
    title: "¿Cómo se desarrolla?",
    content:
      'El grupo de Biodanza Perinatal "Mamá y yo" es un espacio donde te sentirás segura y apoyada para expresarte, emocionarte y compartir experiencias sobre esta nueva etapa de crianza de tu bebé.'
  },
  {
    title: "¿A quién va dirigido?",
    content:
      "A ti, una vez hayas decidido ser madre, te vendrán a la cabeza mil dudas, miedos o curiosidades sobre lo que supone la maternidad y la crianza de tu bebé. Tanto si quieres conocer nuevas formas de relacionarte con tu bebé y cuidarlo, o si necesitas compartir cómo te sientes respecto a tu entorno (tu familia, tus amigos, pareja) desde la llegada del bebé, seguramente formar parte de algo así puede ser de gran ayuda para ti."
  },
  {
    title: "¿Con qué objetivo?",
    content:
      "Sentirte acompañada y apoyada en la crianza de tu bebé, aumentar la seguridad y la confianza en ti misma, a través del desarrollo de potenciales afectivos y de comunicación que te conecten contigo misma, con tu bebé y con los demás.",
    footerComponent: <TopicSearchIconText topic="Biodanza Perinatal" />,
    shadow: 'bottom'
  },
  {
    title: "¿Qué es?",
    content:
      "La Bioenergética es una Terapia Corporal cuyo objetivo es desbloquear las tensiones crónicas y liberar bloqueos energéticos, ocasionados por la represión de emociones en la infancia, y  tomar de conciencia de patrones limitantes que nos impiden vivir plenamente, creando una conexión profunda con nuestro cuerpo.",
    footerComponent: <TopicSearchIconText topic="Terapia Bioenergética" />,
    shadow: 'top'
  },
  {
    title: "¿Cómo se desarrolla?",
    content:
      'La bioenergética es un conjunto de ejercicios y movimientos sincronizados con la respiración a través de los cuales se destensiona la estructura muscular formada para contener dichas emociones. Estos bloqueos pueden venir desde la infancia, a través de los ejercicios va emergiendo nuestra energía vital progresivamente y, a medida que esto sucede, nuestra energía vital contenida comienza a desplegarse a través de la expresión física y emocional.'
  },
  {
    title: "¿A quién va dirigido?",
    content:
      "La Terapia Bioenergética puede ayudarte si tienes dificultad para establecer vínculos profundos,inseguridad, estados depresivos, angustia, falta de ímpetu vital, estrés, ausencia de motivación existencial o simplemente quieres realizar un cambio,  desarrollar tus potenciales y  mejorar tu estado de salud integral."
  },
  {
    title: "¿Con qué objetivo?",
    content:
      "Entre los beneficios de la Bioenergética están una gran relajación y alivio para nuestro cuerpo, aumento de la voluntad de vivir y amar y junto con ello, la claridad de lo que es esencial para nuestra vida. La bioenergética proporciona la mirada y una reconexión cuerpo-mente y abre posibilidades de sanar varios problemas como ansiedades, estrés y baja autoestima, entre otras disfunciones.",
    footerComponent: <TopicSearchIconText topic="Terapia Bioenergética" />,
    shadow: 'bottom'
  },
  {
    title: "¿Qué es?",
    content: 'Preparación corporal y sensorial al parto. Fundamentado en conocimientos anatómicos y sensoriales que posibilitan a la mujer embarazada aumentar la confianza y la seguridad para el parto.',
    footerComponent: <TopicSearchIconText topic="Parto y Movimiento" />,
    shadow: 'top'
  },
  {
    title: "¿Cómo se desarrolla?",
    content: "Te proponemos una gran variedad de movimientos, ejercicios y pautas para poder adaptar el cuerpo a los cambios constantes de la gestación, ampliar la confianza en la capacidad respiratoria y de relajación, prevenir molestias y cuidarse en la vida cotidiana. La metodología es muy vivencial, lo que te facilita la adquisición de conocimientos y ayuda a conectarte con la fuerza y seguridad interna. Las sesiones se realizan de forma grupal o individual, con o sin acompañante.",
  },
  {
    title: "¿A quién va dirigido?",
    content:
      'Para ti, que estás nueve meses en contacto íntimo con tu hijo o hija y posiblemente deseas comprender y sentir los cambios en tu cuerpo, ir identificando lo que necesitas y poder parir de una forma respetuosa y consciente.'
  },
  {
    title: "¿Con qué objetivo?",
    content:
      "Descubrir cómo la movilidad de la pelvis y la fluidez de la respiración pueden ser grandes aliadas durante el parto. Obtener herramientas y estrategias para acompañar las contracciones, contactar con el bebé y acompañarlo a nacer. Experimentar una gran variedad de posiciones y movimientos que podrán facilitar a la pelvis adaptarse, acomodarse y \"mecer\" al bebé durante la dilatación y el expulsivo, con o sin epidural, individualmente o con acompañante. Aumentar la confianza en el proceso fisiológico de parir.",
    footerComponent: <TopicSearchIconText topic="Parto y Movimiento" />,
    shadow: 'bottom'
  },
];

const renderBlocks = (dataArr, startIndex, endIndex) =>
  dataArr.slice(startIndex, endIndex)
    .map(({ id, fluidSrc, title, content, footerComponent, shadow }) => (
      <ImageTextBlock
        key={id}
        fluidSrc={fluidSrc}
        imgProps={{ alt: title }}
        shadow={shadow}
        titleSlot={
          <H2 textAlign="left" marginTop="0" paddingTop="24px">
            {title}
          </H2>
        }
        contentSlot={
          <P textAlign="left" marginBottom="0" paddingBottom="24px">
            {content}
          </P>
        }
        footerSlot={footerComponent}
      />
    ))

const IndexPage = ({ data, location }) => {
  const imageTextDataBlockMaps = data.images.nodes.map((node, i) =>
    ({
      ...imageTextBlockMaps[i],
      key: node.id,
      fluidSrc: node.childImageSharp?.fluid
    })
  )

  return (
    <Layout>
      <SEO
        title="Psicología integrativa · Danza Emoción"
        description="Danza Emoción y acompañamiento psicológico integrativo: cuerpo, emoción y palabra para procesos de cambio, bienestar emocional y vínculo. Tarragona, Reus y online."
        pathname={location?.pathname}
      />
      <LimitedContainer>
        <Logo src={logoWhite} />
        <LogoSubtitle>
          <SubtitleChunk>Psicología integrativa</SubtitleChunk>
          <wbr />
          <SubtitleChunk> · Danza Emoción</SubtitleChunk>
        </LogoSubtitle>
        <ContactBlock bold={true} />
        <WorkshopsCta to={routes.get('clases-y-talleres')}>
          Ver talleres y clases
        </WorkshopsCta>
        <H1 marginTop="170px">Servicios</H1>
        <P textAlign="left" marginTop="50px">
          Acompañamiento psicológico y corporal en momentos de transformación y
          cambio vital. Un espacio seguro para comprender, regular y elaborar lo
          que estás viviendo, integrando cuerpo, emoción y palabra desde una
          mirada integrativa.
          </P>
      </LimitedContainer>
      <Foldable title="Danza Emoción" folded={false} >
        {renderBlocks(imageTextDataBlockMaps, 4, 8)}
      </Foldable>
      <Foldable title="Terapia Bioenergética" folded >
        {renderBlocks(imageTextDataBlockMaps, 12, 16)}
      </Foldable>
      <Foldable title="Parto y Movimiento" folded >
        {renderBlocks(imageTextDataBlockMaps, 16, 20)}
      </Foldable>
    </Layout>
  )
};

export const query = graphql`
  query {
      images: allFile(filter: {relativeDirectory: {eq: "index"}}, sort: {fields: name}) {
        nodes {
          ...Fluid1200
        }
    }
  }
`;

export default IndexPage;
