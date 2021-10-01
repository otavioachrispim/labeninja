import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 40px 16px;
  flex-direction: column;
  align-items: center;
  border: 1px solid #cbd5e0;
  box-shadow: 0px 4px 8px rgba(150, 150, 150, 0.32);
  border-radius: 10px;
  width: 480px;
  height: 480px;
  margin: 0 auto;
`;

export const ContentJob = styled.div`
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
export const ContentPayment = styled.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    background: var(--blue);
    border: 0;
    color: var(--background);
    padding: 4px;
    border-radius: 10px;
    font-weight: bold;
  }
`;
