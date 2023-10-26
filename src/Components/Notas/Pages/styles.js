import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  max-width: 1100px;

  margin: 3.5rem auto 0 auto;

  list-style: none;
  transition: all linear 0.5s;

  @media (min-width: 873px) {
    justify-content: flex-start;
  }
`
