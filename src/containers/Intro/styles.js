import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: calc(100vh - 90px);
  padding: 2rem 0;
  display: grid;
  grid-template-rows: 1fr 1fr;
  place-items: center;
`

export const Figure = styled.figure`
  & img {
    width: 100%;
    max-width: 220px;
    height: auto;
    object-fit: cover;
    border: 5px solid #645dd7;
    border-radius: 50%;
  }
`

export const Description = styled.article`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & h1 {
    font-size: 3.1rem;
    line-height: 3.6rem;
    font-weight: 700;
    text-align: center;
  }

  & p {
    font-size: 2.1rem;
    line-height: 3rem;
    text-align: center;
  }
`
