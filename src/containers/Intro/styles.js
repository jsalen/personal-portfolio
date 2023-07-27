import styled, { keyframes } from 'styled-components'

const rotateRightAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(16deg);
  }
`

const rotateLeftAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-16deg);
  }
`

export const Container = styled.section`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  height: auto;
  min-height: 500px;
  padding: 7rem 1.6rem;
  display: grid;
  grid-template-rows: 240px 1fr;
  place-items: center;

  @media (min-width: 1024px) {
    grid-template-rows: auto;
    grid-template-columns: 1fr 45%;
  }
`

export const Figure = styled.figure`
  animation: ${rotateRightAnimation} 1s ease-in-out forwards;
  border: 5px solid #645dd7;
  border-radius: 8px;

  & img {
    animation: ${rotateLeftAnimation} 1s forwards;
    animation-delay: 1s;
    width: 100%;
    max-width: 340px;
    height: auto;
    object-fit: cover;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    & img {
      animation: none;
    }
  }
`

export const Description = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  & h1 {
    margin-bottom: 1.2rem;
    font-size: 3.1rem;
    line-height: 3.6rem;
    font-weight: 700;
    text-align: center;
    color: #645dd7;
  }

  & p {
    font-size: 2.1rem;
    line-height: 3rem;
    text-align: center;
  }

  & a {
    margin-top: 16px;
    width: fit-content;
    height: auto;
    font-size: 24px;
    line-height: 28px;
    padding: 12px 24px;
    background-color: #645dd7;
    color: #f8f7ff;

    &:hover {
      background-color: #f8f7ff;
      color: #645dd7;
    }
  }

  @media (min-width: 1024px) {
    & h1 {
      font-size: 5rem;
      line-height: 6.3rem;
    }
  }
`
