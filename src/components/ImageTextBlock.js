import Img from "gatsby-image";
import React from "react";
import styled, { css } from "styled-components";
import { palette } from "../components/constants";
import { LimitedContainer } from "../components/Containers";
import { A } from "./TextStyles";

const BackgroundContainer = styled(LimitedContainer)`
  background-color: ${palette.darkRed};
  box-shadow: ${({ shadow }) => shadow && 'inset 0px -6px 10px rgba(0, 0, 0, 0.3);'};
  ${({shorter}) => shorter && 'margin: -12px auto'}
`;

const imgContainerStyle = css`
  box-shadow: ${({ shadow }) => shadow && '0px 4px 4px rgba(0, 0, 0, 0.25);'};
`

const FluidImgContainer = styled(Img)`
  ${imgContainerStyle}
`

const ImgContainer = styled('img')`
  ${imgContainerStyle}
`

/**
 * A fluid image followed by three content slots on a dark red bg.
 * Can have a shadow below the image or an inset shadow at the end of the block.
 */
const ImageTextBlock = ({
  fluidSrc,
  imgSrc,
  imgLink,
  titleSlot,
  contentSlot,
  footerSlot,
  shadow,
  shorter
}) => {
  const hasTopShadow = shadow === 'top' || shadow === 'both';
  const hasBottomShadow = shadow === 'bottom' || shadow === 'both';

  let imgComponent;
  if (fluidSrc) {
    imgComponent = (
      <FluidImgContainer
        fluid={fluidSrc}
        shadow={hasTopShadow} />
    )
  } else if (imgSrc) {
    imgComponent = (
      <ImgContainer
        src={imgSrc}
        shadow={hasTopShadow} />
    )
  }

  const imageBlock = imgLink
    ? (
      <A to={imgLink}>{imgComponent}</A>
    )
    : imgComponent;

  return (
    <React.Fragment>
      {imageBlock}
      <BackgroundContainer
        shadow={hasBottomShadow}
        shorter={shorter}
      >
        {titleSlot}
        {contentSlot}
        {footerSlot}
      </BackgroundContainer>
    </React.Fragment>
  )
};

export default ImageTextBlock;
