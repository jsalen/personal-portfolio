import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 80px;
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  background-color: #f8f7ff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  z-index: 3;

  & > div {
    display: flex;
    gap: 1.6rem;
  }
`;
