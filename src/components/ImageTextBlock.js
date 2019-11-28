import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { palette } from "../components/constants";
import { LimitedContainer } from "../components/Containers";

const BackgroundContainer = styled(LimitedContainer)`
  background-color: ${palette.darkRed};
  box-shadow: ${({ shadow }) => shadow && 'inset 0px -6px 10px rgba(0, 0, 0, 0.3);'};
`;

const ImgContainer = styled(Img)`
  box-shadow: ${({ shadow }) => shadow && '0px 4px 4px rgba(0, 0, 0, 0.25);'};
`
/**
 * A fluid image followed by three content slots on a dark red bg.
 * Can have a shadow below the image or an inset shadow at the end of the block.
 */
const ImageTextBlock = ({
  fluidSrc,
  titleSlot,
  contentSlot,
  footerSlot,
  shadow
}) => (
    <React.Fragment>
      <ImgContainer
        fluid={fluidSrc}
        shadow={shadow === 'top'} />
      <BackgroundContainer
        shadow={shadow === 'bottom'}>
        {titleSlot}
        {contentSlot}
        {footerSlot}
      </BackgroundContainer>
    </React.Fragment>
  );

export default ImageTextBlock;
