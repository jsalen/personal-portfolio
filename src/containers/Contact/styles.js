import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 680px;
  min-height: 50vh;
  padding: 12rem 2rem 12rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #645dd7;

  & h2 {
    margin-bottom: 2.4rem;
    font-size: 3.2rem;
    font-weight: 700;
    text-align: center;
  }

  & p {
    margin-bottom: 2.4rem;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.2rem;
  }

  & a {
    margin-top: 16px;
    width: fit-content;
    height: auto;
    font-size: 24px;
    line-height: 28px;
    padding: 1.6rem 3.2rem;
    background-color: #645dd7;
    color: #f8f7ff;

    &:hover {
      background-color: #f8f7ff;
      color: #645dd7;
    }
  }

  @media (min-width: 1024px) {
    max-width: 1140px;
    margin: 0 auto;
    & h2 {
      font-size: 6.4rem;
      line-height: 6rem;
      margin-bottom: 4.8rem;
    }
  }
`;
