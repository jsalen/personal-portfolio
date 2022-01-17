import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  height: auto;
  min-height: 500px;
  padding: 7rem 1.6rem;
  display: grid;
  grid-template-rows: 240px 1fr;
  place-items: center;

  @media (min-width: 960px) {
    grid-template-rows: auto;
    grid-template-columns: 240px 1fr;
  }
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

  & h1 {
    margin-bottom: 1.2rem;
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
