import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 7rem 1.6rem;
  background: rgb(100, 93, 215);
  background: linear-gradient(
    180deg,
    rgba(100, 93, 215, 1) 60%,
    rgba(80, 83, 163, 1) 100%
  );
  color: #f8f7ff;

  & h2 {
    margin-bottom: 4rem;
    font-size: 3.2rem;
    font-weight: 700;
    text-align: center;
  }
`;

export const Content = styled.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.8rem;
  display: flex;
  flex-direction: column;
  gap: 12px;

  a {
    color: #b3fffc;
    text-decoration: none;
    font-weight: 700;
  }

  span {
    font-weight: 700;
  }

  ul {
    width: 100%;
    margin: 2rem auto 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    gap: 1.6rem;
  }

  li {
    min-width: 78px;
    padding: 1.2rem 2rem;
    font-weight: 300;
    color: #645dd7;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    background-color: #f8f8f8;
    border-radius: 20px;
    border: 1px solid transparent;
  }

  li:nth-child(even) {
    color: #f8f8f8;
    background-color: #645dd7;
    border: 1px solid #f8f8f8;
  }
`;
