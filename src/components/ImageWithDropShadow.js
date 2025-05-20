import Img from "gatsby-image";
import React from "react";
import styled, { css } from "styled-components";
import { styles } from "./constants";
import { A } from "./TextStyles";

const imgContainerStyle = css`
  box-shadow: ${styles.shadows.drop};
  ${({style}) => style}
`

const FluidImgContainer = styled(Img)`
  ${imgContainerStyle}
  max-width: 100vw;
  max-height: 100vh;
  width: auto;
  height: auto;
  display: block;
  margin: 0 auto;
`

const ImgContainer = styled.img`
  ${imgContainerStyle}
  max-width: 100vw;
  max-height: 100vh;
  width: auto;
  height: auto;
  display: block;
  margin: 0 auto;
  object-fit: contain;
`

/**
 * A fluid or normal image with drop shadow and optional link.
 */
const ImageWithDropShadow = ({fluidSrc, imgSrc, imgLink, ...restProps}) => {

  let imgComponent;
  if (fluidSrc) {
    imgComponent = <FluidImgContainer fluid={fluidSrc} {...restProps} />
  } else if (imgSrc) {
    imgComponent = <ImgContainer src={imgSrc} {...restProps} />
  }

  const imageBlock = imgLink
    ? <A to={imgLink}>{imgComponent}</A>
    : imgComponent;

  return imageBlock
};

export default ImageWithDropShadow;
