import styled from 'styled-components';
import { palette } from "./constants";
import React from "react";

const Line = styled.div`
  height: 1px;
  width: ${({ width }) => width || '100%'};
  max-width: 400px;
  background-color: ${({ color }) => color || palette.white};
  margin-left: auto;
  margin-right: auto;
`

const HoritzontalLineSeparator = ({ width, color }) =>
  <Line width={width} color={color} />

export default HoritzontalLineSeparator;
