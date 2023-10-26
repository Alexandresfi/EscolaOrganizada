import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 3rem;

  max-width: 1000px;

  margin: 3.5rem auto 0 auto;

  list-style: none;
  transition: all linear 0.5s;
`

export const Container = styled.div`
  width: 250px;
  height: 300px;
  border-radius: 10px;
  padding: 1rem;

  background: linear-gradient(
    90deg,
    #d80032 47.64%,
    rgba(104, 35, 56, 0) 98.57%
  );

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px 0;

  p {
    text-align: center;
  }

  &:hover {
    filter: brightness(0.9);
    box-shadow: 26px 36px 14.5152px #0c0407;
  }
`
