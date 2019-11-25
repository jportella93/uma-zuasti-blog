import PropTypes from 'prop-types';
import React from 'react';
import styled, {css} from 'styled-components';
import {LimitedContainer} from '../components/Containers';
import {H2} from '../components/TextStyles';
import ChevronDownWhite from '../img/chevron-down-white.svg';
import {UnstyledButton} from './Buttons';

const transition = css`
 transition: all 0.3s ease;
`

const TopBar = styled(UnstyledButton)`
  display: flex;
`

const FoldablePart = styled.div`
  margin-top: 8px;
 overflow: hidden;
 max-height: ${props => props.isFolded ?
    '0' : '10000px'};
  ${transition}
`

const Chevron = styled.img`
transform: ${props => props.isFolded ?
    'rotate(0deg)' : 'rotate(-180deg)'};
  ${transition}
`

const Foldable = ({title, folded, children}) => {
  const [isFolded, setFolded] = React.useState(folded);

  return (
    <>
      <LimitedContainer>
        <TopBar onClick={() => setFolded(!isFolded)}>
          <H2 margin="0 15px 0 0">{title}</H2>
          <Chevron src={ChevronDownWhite} isFolded={isFolded} />
        </TopBar>
      </LimitedContainer>
      <FoldablePart isFolded={isFolded}>
        {children}
      </FoldablePart>
    </>
  )
}

Foldable.propTypes = {
  title: PropTypes.string,
  folded: PropTypes.bool
}

Foldable.defaultProps = {
  folded: PropTypes.false
}

export default Foldable
