import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  min-height: 90px;
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  background-color: inherit;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  a {
    width: 25px;
    height: 25px;
    font-size: 3rem;
    cursor: pointer;
    color: #645DD7;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #4b44bb;
  }
`
