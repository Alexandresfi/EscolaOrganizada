import styled from 'styled-components'

export const ContainerStudant = styled.div`
  display: flex;
  align-items: center;
  gap: 0 40px;
`
export const Container = styled.section`
  max-width: 70vw;
  width: 100%;
  margin: 2rem auto;
  padding: 1rem 1.5rem;
  border-radius: 8px;

  background: white;
  color: black;

  @media (max-width: 660px) {
    width: 92%;
  }
`

export const Content = styled.div`
  margin: 1.5rem 0;

  .color * {
    color: white;
  }

  span {
    color: red;
    font-size: 0.75rem;
  }
`

export const H1 = styled.h1`
  text-align: center;
`
