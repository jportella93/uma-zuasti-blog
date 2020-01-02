import Img from "gatsby-image";
import React from "react";
import styled, { css } from "styled-components";
import { palette } from "../components/constants";
import { LimitedContainer } from "../components/Containers";
import { A } from "./TextStyles";

const BackgroundContainer = styled(LimitedContainer)`
  background-color: ${palette.darkRed};
  box-shadow: ${({ shadow }) => shadow && 'inset 0px -6px 10px rgba(0, 0, 0, 0.3);'};
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
  shadow
}) => {

  let imgComponent;
  if (fluidSrc) {
    imgComponent = (
      <FluidImgContainer
        fluid={fluidSrc}
        shadow={shadow === 'top'} />
    )
  } else if (imgSrc) {
    imgComponent = (
      <ImgContainer
        src={imgSrc}
        shadow={shadow === 'top'} />
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
        shadow={shadow === 'bottom'}>
        {titleSlot}
        {contentSlot}
        {footerSlot}
      </BackgroundContainer>
    </React.Fragment>
  )
};

export default ImageTextBlock;
