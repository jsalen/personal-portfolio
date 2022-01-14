import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`

export const Link = styled.a`
  ${(props) =>
    props.responsive &&
    css`
      display: none;
      width: 25px;
      height: 25px;
      font-size: 3rem;
      cursor: pointer;
      color: #645dd7;
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
