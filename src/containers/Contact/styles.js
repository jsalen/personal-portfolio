import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 0 2rem 4rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  color: #645dd7;

  & h1 {
    font-size: 2.6rem;
    font-weight: 700;
    text-align: center;value
  }

  & p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.2rem;
  }

  & a {
    width: 80%;
    max-width: 280px;
  }
`
