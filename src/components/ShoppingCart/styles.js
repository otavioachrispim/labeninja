import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  padding: 40px 16px 0px 16px;
  flex-direction: column;
  align-items: center;
  border: 1px solid #cbd5e0;
  box-shadow: 0px 4px 8px rgba(150, 150, 150, 0.32);
  border-radius: 10px;
  width: 640px;
  /* height: 640px; */

  @media (max-width: 728px) {
    width: 100%;
    padding: 20px 8px 0px 8px;
    overflow: auto;
  }

  img {
    @media (max-width: 728px) {
      width: 100%;
    }
  }
`;

export const ContentPayment = styled.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 728px) {
    margin-top: 20px;
  }

  button {
    background: var(--blue);
    border: 0;
    color: var(--background);
    padding: 4px;
    border-radius: 10px;
    font-weight: bold;
  }
`;
