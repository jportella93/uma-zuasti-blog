import styled from 'styled-components';

export const UnstyledButton = styled.button`
  border: 0;
  padding: 0;
  background: none;
  cursor: pointer;
`

export const BasicButton = styled.button`
  color: #fafafa;
  background-color: rgb(203,46,89);
  font-size: 2rem;
  border-radius: 7px;
  outline: none;
  transition: filter 0.1s ease, box-shadow 0.5s ease;
  cursor: pointer;
  padding: 10px 15px;

  :active {
    filter: brightness(0.7);
  }
`

export const FlowerButton = styled(BasicButton)`
  transition: box-shadow 0.5s ease;

  :hover {
    box-shadow: 2.5px 2.5px 0 2.5px white, -2.5px -2.5px 0 2.5px white, 0 0 0 2px white inset,
      10px 10px 0 10px rgb(203,46,89), -10px -10px 0 10px rgb(203,46,89)
  }
`
