import styled from 'styled-components'

export const Card = styled.article`
  width: 100%;
  padding: 2.8rem 1.6rem;
  background-color: #645dd7;
  color: #f8f7ff;
  border-radius: 8px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);

  & h2 {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1rem;
  }

  & p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.2rem;
  }
`

export const Footer = styled.footer`
  & ul {
    margin: 1.2rem 0;
    display: flex;
    gap: 1.2rem;
    flex-wrap: wrap;
    list-style: none;
    font-size: 1.2rem;
    line-height: 1.6rem;
    font-weight: 300;
  }

  & div {
    display: flex;
    gap: 1.2rem;
  }

  & svg {
    font-size: 2.2rem;
    color: #f8f7ff;
    transition: color 0.3s ease;

    &:hover {
      color: #b3fffc;
    }
  }
`
