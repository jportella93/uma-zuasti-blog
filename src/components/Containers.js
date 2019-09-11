import styled from 'styled-components'

export const Basic = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`

export const Limited = styled(Basic)`
  @media (min-width: 768px) {
    max-width: 1140px;
  }
`
