import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 8px;
  border-radius: 10px;
  background-color: #f7fafc;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 16px;
    font-weight: 400;
  }
  button {
    border: 0;
    background: transparent;

    svg {
      color: var(--red);
      width: 20px;
      height: 20px;
    }
  }
`;
