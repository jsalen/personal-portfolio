import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  padding: 4rem 2rem;
  background: #f8f7ff;
  color: #645dd7;

  & h1 {
    font-size: 2.6rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1.2rem;
  }
`

export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 420px));
  grid-gap: 1.2rem;
`
