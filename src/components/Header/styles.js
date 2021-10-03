import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 1rem;

  @media (max-width: 728px) {
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: #111;
    font-weight: bold;
    font-size: 32px;
  }

  > div {
    display: flex;

    @media (max-width: 728px) {
      display: flex;
      flex-direction: column;
    }
  }

  svg {
    width: 24px;
    height: 24px;
    color: #111;
  }

  button {
    width: 200px;
    height: 32px;
    font-size: 1rem;
    padding: 0 2rem;
    border-radius: 10px;
    border: 1px solid var(--blue);
    color: var(--blue);
    background-color: transparent;
    transition: all 0.2s;

    @media (max-width: 728px) {
      margin: 0;
      margin-top: 16px;
    }

    :hover {
      border: 0;
      background-color: var(--blue);
      color: var(--background);
    }

    & + button {
      margin-left: 1rem;

      color: var(--orange);
      background-color: transparent;
      border: 1px solid var(--orange);

      @media (max-width: 728px) {
        margin: 0;
        margin-top: 16px;
      }

      :hover {
        background-color: var(--orange);
        color: var(--background);
        border: 0;
      }
    }
  }
`;

export const ButtonCart = styled.div`
  strong {
    display: none;
    color: #111;

    @media (max-width: 728px) {
      display: block;
    }
  }

  button {
    width: 100%;
    border: 0;
    display: flex;
    align-items: center;

    :hover {
      background-color: #fff;
      transform: scale(1.1);
    }
  }
`;
