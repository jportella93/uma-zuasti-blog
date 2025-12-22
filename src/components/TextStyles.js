import { Link } from 'gatsby';
import styled, { createGlobalStyle, css } from 'styled-components';
import { palette } from './constants';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: Montserrat, sans-serif !important;
    margin: 0;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :focus-visible {
    outline: 3px solid rgba(197, 49, 81, 0.35);
    outline-offset: 2px;
  }
`

const defaults = css`
  color: ${({ color }) => color ?
    color : palette.white};
  text-align: ${({ textAlign }) => textAlign ?
    textAlign : 'center'};
`

const overrides = css`
  max-width: ${({ maxWidth }) => maxWidth};
  margin: ${({ margin }) => margin};
  margin-top: ${({ marginTop }) => marginTop};
  margin-right: ${({ marginRight }) => marginRight};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  padding: ${({ padding }) => padding};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-right: ${({ paddingRight }) => paddingRight};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  text-decoration: ${({ textDecoration }) => textDecoration};
`

export const H1 = styled.h1`
${defaults}
font-size: 2rem;
margin: .67rem auto;
${overrides}
`

export const H2 = styled.h2`
${defaults}
font-size: 1.5rem;
margin: .75rem auto;
${overrides}
`

export const H3 = styled.h3`
${defaults}
font-size: 1.17rem;
margin: .83rem auto;
${overrides}
`

export const H4 = styled.h4`
${defaults}
font-size: 1.12rem;
margin: 1.12rem auto;
${overrides}
`

export const H5 = styled.h5`
${defaults}
font-size: .83rem;
margin: 1.5rem auto;
${overrides}
`

export const H6 = styled.h6`
${defaults}
font-size: .75rem;
margin: 1.67rem auto;
${overrides}
`

export const P = styled.p`
${defaults}
margin: 1.12rem auto;
${overrides}
`

export const Span = styled.span`
${defaults}
${overrides}
`

export const A = styled(Link)`
${defaults}
${overrides}

  :hover {
    ${defaults}
    text-decoration: underline;
    ${overrides}
  }
`
