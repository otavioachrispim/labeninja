import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media (max-width: 728px) {
    display: flex;
    flex-direction: column;
  }

  div {
    display: flex;
    flex-direction: column;

    @media (max-width: 728px) {
      margin-top: 20px;
    }

    & + div {
      margin-left: 20px;

      @media (max-width: 728px) {
        margin-top: 20px;
        margin-left: 0;
      }
    }

    input {
      border: 1px solid #cbd5e0;
      background-color: transparent;
      padding: 4px;
      align-items: center;
      border-radius: 10px;
    }

    label {
      font-size: 14px;
      opacity: 0.8;
    }

    select {
      height: 30px;
      border: 1px solid #cbd5e0;
      padding: 4px;
      border-radius: 10px;
    }
  }
`;
