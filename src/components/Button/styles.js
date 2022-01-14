import styled from 'styled-components'

export const Btn = styled.a`
  width: 100%;
  height: 45px;
  padding: 6px 12px;
  display: grid;
  place-items: center;
  text-align: center;
  color: #645dd7;
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
  border: 2px solid #645dd7;
  border-radius: 24px;
  background-color: #f8f7ff;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #645dd7;
    color: #f8f7ff;
  }
`
