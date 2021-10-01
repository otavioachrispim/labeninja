import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;

    & + div {
      margin-left: 20px;
    }

    input {
      border: 1px solid #cbd5e0;
      background-color: transparent;
      padding: 4px;
      align-items: center;
    }

    label {
      font-size: 14px;
      opacity: 0.8;
    }

    select {
      height: 30px;
      border: 1px solid #cbd5e0;
      padding: 4px;
    }
  }
`;
