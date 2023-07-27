import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 12rem 1.6rem;
  color: #645dd7;

  & h2 {
    margin-bottom: 4rem;
    font-size: 3.2rem;
    font-weight: 700;
    text-align: center;
  }

  & a {
    text-decoration: none;
    color: #645dd7;
    text-decoration: underline;
  }

  & ul {
    width: 100%;
    max-width: 680px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    & span {
      font-weight: 700;

      & ~ ul.row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1.6rem;
      }
      & ~ ul {
        padding-left: 2.4rem;
        margin-top: 1rem;

        & li {
          display: flex;
          gap: .8rem;
          align-items: center;
          position: relative;
        }
      }
    }

    & li {
      font-size: 2rem;
      font-weight: 400;
      line-height: 2.8rem;
      list-style: none;
    }
  }
  @media (min-width: 1024px) {
    & h2 {
      font-size: 6.4rem;
      line-height: 6rem;
    }
  }
`;
