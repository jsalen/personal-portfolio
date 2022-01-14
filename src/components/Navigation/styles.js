import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`

export const Link = styled.a`
  ${(props) =>
    props.responsive &&
    css`
      width: 25px;
      height: 25px;
      margin-right: 2.4rem;
      display: none;
      font-size: 3rem;
      color: #645dd7;
      cursor: pointer;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: #4b44bb;
      }
    `}

  @media (min-width: 480px) {
    display: block;
  }
`
