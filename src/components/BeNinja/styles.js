import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  border: 1px solid #cbd5e0;
  box-shadow: 0px 4px 8px rgba(150, 150, 150, 0.32);
  padding: 40px 16px;
  border-radius: 10px;
  /* width: 640px;
  height: 640px; */

  @media (max-width: 728px) {
    padding: 20px 12px;
    width: 100%;
  }

  img {
    @media (max-width: 728px) {
      display: none;
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 728px) {
    display: flex;
    flex-direction: column;
  }

  > div {
    display: flex;
    align-items: center;
  }

  input {
    & + label {
      margin-right: 24px;
    }
  }

  label {
    margin-left: 8px;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  @media (max-width: 728px) {
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 600px;
    margin-top: 40px;

    @media (max-width: 728px) {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    input {
      height: 40px;
      border: 0;
      padding: 0.5rem;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      font-size: 16px;

      & + input {
        margin-top: 20px;
      }
    }

    select {
      margin-top: 20px;
      margin-bottom: 20px;
      height: 40px;
      border: 0;
      padding: 0.5rem;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      font-size: 16px;
    }

    button {
      margin-top: 20px;
      height: 32px;
      font-size: 1rem;
      padding: 0 2rem;
      border-radius: 10px;
      border: 0;
      color: var(--background);
      background-color: var(--blue);
      transition: all 0.2s;

      :hover {
        border: 0;
        background-color: var(--blue);
        color: var(--background);
      }
    }
  }
`;
