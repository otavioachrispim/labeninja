import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  padding: 40px 16px 0px 16px;
  align-items: center;
  border: 1px solid #cbd5e0;
  box-shadow: 0px 4px 8px rgba(150, 150, 150, 0.32);
  border-radius: 10px;
  margin-bottom: 16px;
  justify-content: center;
  width: 640px;

  @media (max-width: 728px) {
    display: flex;
    flex-direction: column;
    padding: 20px 8px;
    width: 100%;
  }

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
`;

export const ContentImg = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 728px) {
    display: none;
  }

  img {
    height: 400px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > div {
    display: flex;
    flex-direction: column;

    margin-top: 20px;

    button:first-child {
      display: flex;
      align-items: center;
      justify-content: flex-start;
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
      justify-content: flex-start;
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
