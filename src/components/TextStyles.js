import styled from 'styled-components';
import {Link} from 'gatsby';

export const H1 = styled.h1`
font-size: 2rem;
margin: .67rem 0;
`

export const H2 = styled.h2`
font-size: 1.5rem;
margin: .75rem 0;
`

export const H3 = styled.h3`
font-size: 1.17rem;
margin: .83rem 0;
`

export const H4 = styled.h4`
font-size: 1.12rem;
margin: 1.12rem 0;
`

export const H5 = styled.h5`
font-size: .83rem;
margin: 1.5rem 0 ;
`

export const H6 = styled.h6`
font-size: .75rem;
margin: 1.67rem 0;
`

export const P = styled.p`
margin: 1.12rem 0;
`

export const A = styled(Link)`
  color: rgb(203,46,89);

  :hover {
    color: rgb(203,46,89);
    text-decoration: underline;
  }
`
