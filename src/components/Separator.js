import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const SeparatorElement = styled.div`
  height: ${({height}) => height};
`

const Separator = ({height}) =>
  <SeparatorElement height={height} />

Separator.propTypes = {
  height: PropTypes.string,
}

export default Separator
