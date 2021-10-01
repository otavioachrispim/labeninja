import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  align-items: center;
  border: 1px solid #cbd5e0;
  box-shadow: 0px 4px 8px rgba(150, 150, 150, 0.32);
  border-radius: 10px;
  width: 252px;
  height: 140px;
  position: relative;
  margin-right: 16px;
  margin-bottom: 16px;

  h1 {
    font-size: 20px;
  }

  strong {
    font-size: 14px;
    font-weight: 400;
    margin-top: 12px;
  }

  > div {
    button:first-child {
      padding: 0 2rem;
      position: absolute;
      left: 12px;
      bottom: 12px;
      border: 0;
      color: var(--blue);
      transition: all 0.2s;
      background-color: transparent;

      :hover {
        transform: scale(1.1);
      }
    }

    button:last-child {
      position: absolute;
      align-items: center;
      right: 12px;
      bottom: 12px;
      width: 40px;
      color: var(--orange);
      background-color: transparent;
      border: 0;

      svg {
        width: 20px;
        height: 20px;
      }

      :hover {
        transform: scale(1.1);
      }
    }
  }
`;
