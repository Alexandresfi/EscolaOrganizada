import styled from 'styled-components'

export const Container = styled.section`
  width: 70vw;
  margin: 2rem auto;
  padding: 1rem 1.5rem;
  border-radius: 8px;

  background: white;
  color: black;

  @media (max-width: 660px) {
    width: 92%;
  }
`
export const H1 = styled.h1`
  text-align: center;
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

export const HearderProgress = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 10px;

  li {
    margin-right: 4rem;
    list-style: none;

    .width-select {
      width: 140px;
    }

    .width-small {
      width: 95px;
    }
  }

  li *,
  .color * {
    color: white;
  }
`
