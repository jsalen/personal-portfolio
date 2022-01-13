import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  padding: 4rem 2rem 2rem;
  background: rgb(100, 93, 215);
  background: linear-gradient(
    180deg,
    rgba(100, 93, 215, 1) 60%,
    rgba(80, 83, 163, 1) 100%
  );
  color: #f8f7ff;

  & h1 {
    font-size: 2.6rem;
    font-weight: 700;
    text-align: center;
  }
`

export const Content = styled.article`
  width: 100%;
  margin-top: 2rem;
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
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    list-style: none;
  }
`
