import styled from 'styled-components'

export const Card = styled.article`
  position: relative;
  width: 100%;
  padding: 2.8rem 1.6rem;
  background-color: #645dd7;
  color: #f8f7ff;
  border-radius: 8px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: all 0.3s ease-in-out;

  & h2 {
    position: relative;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1rem;
  }

  & p {
    position: relative;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.2rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter: opacity(0.3) blur(1px);
  }

  &:hover {
    transform: translateY(-10px);
  }
`

export const Footer = styled.footer`
  position: relative;
  & ul {
    margin: 1.2rem 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    font-size: 1.2rem;
    line-height: 2.2rem;
    font-weight: 300;

    & li {
      margin-right: 1.2rem;
      letter-spacing: 1.2px;
    }
  }

  & div {
    display: flex;
  }

  & svg {
    margin-right: 1.2rem;
    font-size: 2.2rem;
    color: #f8f7ff;
    transition: color 0.3s ease;

    &:hover {
      color: #b3fffc;
    }
  }
`
