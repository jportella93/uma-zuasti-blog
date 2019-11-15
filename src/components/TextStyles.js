import styled, {css} from 'styled-components';
import {Link} from 'gatsby';
import {palette} from './constants'

const BaseText = css`
  color: ${props => props.color ?
    props.color : palette.white};
  max-width: ${props => props.maxWidth ?
    props.maxWidth : null};
  margin: ${props => props.margin ?
    props.margin : null};
  margin-top: ${props => props.marginTop ?
    props.marginTop : null};
  margin-right: ${props => props.marginRight ?
    props.marginRight : null};
  margin-bottom: ${props => props.marginBotom ?
    props.marginBotom : null};
  margin-left: ${props => props.marginLeft ?
    props.marginLeft : null};


`

export const H1 = styled.h1`
${BaseText}
font-size: 2rem;
margin: .67rem auto;
`

export const H2 = styled.h2`
${BaseText}
font-size: 1.5rem;
margin: .75rem auto;
`

export const H3 = styled.h3`
${BaseText}
font-size: 1.17rem;
margin: .83rem auto;
`

export const H4 = styled.h4`
${BaseText}
font-size: 1.12rem;
margin: 1.12rem auto;
`

export const H5 = styled.h5`
${BaseText}
font-size: .83rem;
margin: 1.5rem auto;
`

export const H6 = styled.h6`
${BaseText}
font-size: .75rem;
margin: 1.67rem auto;
`

export const P = styled.p`
${BaseText}
margin: 1.12rem auto;
`

export const A = styled(Link)`
${BaseText}

  :hover {
    ${BaseText}
    text-decoration: underline;
  }
`
