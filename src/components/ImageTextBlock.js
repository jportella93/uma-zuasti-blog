import React from "react";
import styled from "styled-components";
import { palette, styles } from "../components/constants";
import { LimitedContainer } from "../components/Containers";
import ImageWithDropShadow from "./ImageWithDropShadow";

const BackgroundContainer = styled(LimitedContainer)`
  background-color: ${palette.darkRed};
  box-shadow: ${({ shadow }) => shadow && styles.shadows.inset};
  ${({ shorter }) => shorter && 'margin: -12px auto'}
`;

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
  const hasBottomShadow = shadow === 'bottom' || shadow === 'both';

  return (
    <React.Fragment>
      <BackgroundContainer
        shadow={hasBottomShadow}
        shorter={shorter}
      >
        <ImageWithDropShadow
          fluidSrc={fluidSrc}
          imgSrc={imgSrc}
          imgLink={imgLink}
        />
        {titleSlot}
        {contentSlot}
        {footerSlot}
      </BackgroundContainer>
    </React.Fragment>
  )
};

export default ImageTextBlock;
