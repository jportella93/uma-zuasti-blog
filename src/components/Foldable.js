import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { LimitedContainer } from '../components/Containers';
import { H2 } from '../components/TextStyles';
import ChevronDownWhite from '../img/chevron-down-white.svg';
import { UnstyledButton } from './Buttons';

const transition = css`
  transition: all 1s ease;
`

const TopBar = styled(UnstyledButton)`
  display: flex;
  padding: 8px 0;

  &:focus {
    outline: none;
  }
`

const FoldablePart = styled.div`
  margin-top: 8px;
  overflow: hidden;
  max-height: ${({ maxHeight }) => maxHeight};
  ${transition}
`

const Chevron = styled.img`
  transform: ${props => props.isFolded ?
    'rotate(0deg)' : 'rotate(-180deg)'};
  ${transition}
`

const Foldable = ({ title, folded, children }) => {
  const [isFolded, setFolded] = React.useState(folded);
  const [maxHeight, setMaxHeight] = React.useState('0px');
  const contentRef = React.useRef(null);

  React.useEffect(() => {
    if (isFolded) {
      setMaxHeight('0px');
      return;
    }
    const updateHeight = () => {
      if (contentRef.current) {
        setMaxHeight(`${contentRef.current.scrollHeight}px`);
      }
    };
    updateHeight();
    if (window.ResizeObserver && contentRef.current) {
      const resizeObserver = new ResizeObserver(updateHeight);
      resizeObserver.observe(contentRef.current);
      return () => resizeObserver.disconnect();
    }
  }, [isFolded, children]);

  return (
    <>
      <LimitedContainer>
        <TopBar onClick={() => setFolded(!isFolded)}>
          <H2 margin="0 15px 0 0">{title}</H2>
          <Chevron src={ChevronDownWhite} isFolded={isFolded} />
        </TopBar>
      </LimitedContainer>
      <FoldablePart maxHeight={maxHeight}>
        <div ref={contentRef}>
          {children}
        </div>
      </FoldablePart>
    </>
  );
}

Foldable.propTypes = {
  title: PropTypes.string,
  folded: PropTypes.bool
}

Foldable.defaultProps = {
  folded: PropTypes.false
}

export default Foldable
