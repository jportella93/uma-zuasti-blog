import styled from 'styled-components'

export const BasicContainer = styled.div`
 padding: ${props => props.verticalPadding ? '10px' : '0'} 20px;
`

export const LimitedContainer = styled(BasicContainer)`
  @media (min-width: 768px) {
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
  }
`

export const BlogLimitedContainer = styled(BasicContainer)`
  margin: auto;

  @media (min-width: 768px) {
    max-width: 767px;
  }
`
