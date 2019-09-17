import styled from 'styled-components'

export const BasicContainer = styled.div`
 padding: ${props => props.verticalPadding ? '10px' : '0'} 10px;
`

export const LimitedContainer = styled(BasicContainer)`
  @media (min-width: 768px) {
    max-width: 1140px;
  }
`

export const BlogLimitedContainer = styled(BasicContainer)`
  margin: auto;

  @media (min-width: 768px) {
    max-width: 767px;
  }
`
