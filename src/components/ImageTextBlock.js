import React from "react";
import styled from "styled-components";
import { palette, styles } from "../components/constants";
import { LimitedContainer } from "../components/Containers";
import ImageWithDropShadow from "./ImageWithDropShadow";

export function getShadowPosition(length, i) {
  const isFirst = i === 0;
  const isLast = i + 1 === length;
  if (isFirst && isLast) return 'both';
  if (isFirst) return 'top';
  if (isLast) return 'bottom';
}

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
  imgProps,
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
      <ImageWithDropShadow
        fluidSrc={fluidSrc}
        imgSrc={imgSrc}
        imgLink={imgLink}
        {...imgProps}
      />
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
