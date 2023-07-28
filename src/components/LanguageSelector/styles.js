import styled from "styled-components";

export const StyledLanguageSelector = styled.div`
  position: relative;
  display: flex;
`;

export const Button = styled.button`
  position: relative;
  background: transparent;
  border: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;

  & > svg {
    font-size: 2.4rem;
    color: #645dd7;
    font-weight: 700;
  }

  & > span {
    font-size: 1.6rem;
    color: #141c3a;
    border-left: 1px solid #645dd7;
    padding-left: 0.8rem;
  }

  & > img {
    width: 2.8rem;
    height: auto;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 10px;
  width: fit-content;
  background-color: #f8f7ff;
  border-radius: 0.4rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  z-index: 2;
`;
