import styled from 'styled-components'

export const Container = styled.div`
  background: rgba(231, 225, 228, 0.1);
  padding: 1rem 2rem;
  border-top: 2px rgb(223, 219, 219, 0.1) solid;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Content = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  li {
    padding-right: 1rem;
  }

  li:nth-last-child(2),
  li:nth-last-child(1) {
    display: none;
  }
`
export const ContentInferior = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  li {
    padding-right: 1rem;
  }

  @media (max-width: 660px) {
    display: none;
  }
`
