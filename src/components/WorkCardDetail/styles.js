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
  margin-right: 16px;
  margin-bottom: 16px;

  h1 {
    font-size: 20px;
  }

  strong {
    font-size: 16px;
    font-weight: 400;
    margin-top: 12px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    margin-top: 12px;
  }

  > div {
    display: flex;
    flex-direction: column;

    margin-top: 20px;

    button:first-child {
      padding: 8px;
      display: flex;
      align-items: center;
      padding: 0 2rem;
      border: 0;
      color: var(--blue);
      transition: all 0.4s;
      background-color: transparent;

      :hover {
        transform: scale(1.1);
      }

      svg {
        width: 20px;
        height: 20px;
        margin-right: 8px;
      }
    }

    button:last-child {
      display: flex;
      justify-content: center;
      padding: 8px;
      align-items: center;
      width: 100%;
      color: var(--orange);
      background-color: transparent;
      border: 0;
      margin-top: 12px;
      transition: all 0.4s;

      svg {
        width: 20px;
        height: 20px;
        margin-right: 8px;
      }

      :hover {
        transform: scale(1.1);
      }
    }
  }
`;
