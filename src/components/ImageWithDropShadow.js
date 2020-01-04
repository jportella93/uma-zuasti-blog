import Img from "gatsby-image";
import React from "react";
import styled, { css } from "styled-components";
import { styles } from "./constants";
import { A } from "./TextStyles";

const imgContainerStyle = css`
  box-shadow: ${styles.shadows.drop};
`

const FluidImgContainer = styled(Img)`
  ${imgContainerStyle}
`

const ImgContainer = styled.img`
  ${imgContainerStyle}
`

/**
 * A fluid or normal image with drop shadow and optional link.
 */
const ImageWithDropShadow = ({fluidSrc, imgSrc, imgLink}) => {

  let imgComponent;
  if (fluidSrc) {
    imgComponent = <FluidImgContainer fluid={fluidSrc} />
  } else if (imgSrc) {
    imgComponent = <ImgContainer src={imgSrc} />
  }

  const imageBlock = imgLink
    ? <A to={imgLink}>{imgComponent}</A>
    : imgComponent;

  return imageBlock
};

export default ImageWithDropShadow;
