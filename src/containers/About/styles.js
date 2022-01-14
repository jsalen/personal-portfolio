import styled from 'styled-components'

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

  & h1 {
    margin-bottom: 4rem;
    font-size: 3.2rem;
    font-weight: 700;
    text-align: center;
  }
`

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
  }

  ul li {
    min-width: 78px;
    padding: 0.6rem 2rem;
    margin: 1.2rem;
    color: #645dd7;
    text-align: center;
    background-color: #f8f7ff;
    border-radius: 20px;
  }
`
