import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 12rem 2rem;
  background: #f8f7ff;
  color: #645dd7;
  
  & h2 {
    font-size: 3.2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 4.8rem;
  }

  @media (min-width: 1024px) {
    max-width: 1140px;
    margin: 0 auto;

    & h2 {
      font-size: 6.4rem;
      line-height: 6rem;
    }
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 420px));
  justify-content: center;
  grid-gap: 2.4rem;
`;
