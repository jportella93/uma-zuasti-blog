import styled, {css} from 'styled-components';
import {Link} from 'gatsby';
import {palette} from './constants'

const defaults = css`
  color: ${props => props.color ?
    props.color : palette.white};
  text-align: ${props => props.textAlign ?
    props.textAlign : 'center'};
`

const overrides = css`
  max-width: ${props => props.maxWidth ?
    props.maxWidth : null};
  margin: ${props => props.margin ?
    props.margin : null};
  margin-top: ${props => props.marginTop ?
    props.marginTop : null};
  margin-right: ${props => props.marginRight ?
    props.marginRight : null};
  margin-bottom: ${props => props.marginBottom ?
    props.marginBottom : null};
  margin-left: ${props => props.marginLeft ?
    props.marginLeft : null};
  padding: ${props => props.padding ?
    props.padding : null};
  padding-top: ${props => props.paddingTop ?
    props.paddingTop : null};
  padding-right: ${props => props.paddingRight ?
    props.paddingRight : null};
  padding-bottom: ${props => props.paddingBottom ?
    props.paddingBottom : null};
  padding-left: ${props => props.paddingLeft ?
    props.paddingLeft : null};
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

export const A = styled(Link)`
${defaults}
${overrides}

  :hover {
    ${defaults}
    text-decoration: underline;
    ${overrides}
  }
`
