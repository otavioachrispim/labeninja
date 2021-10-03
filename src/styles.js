import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  min-height: 100vh;
  max-width: 1120px;
  margin: 0 auto;

  @media (max-width: 1124px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 12px;
  }

  @media (max-width: 728px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 12px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;

  @media (max-width: 728px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  img {
    width: 100%;
    height: 600px;
    margin-right: -100px;

    @media (max-width: 728px) {
      width: 100%;
      height: 240px;
      width: 300px;
      margin-right: 0;
    }
  }
`;

export const FooterContent = styled.div`
  margin-top: 40px;
  background-color: #f7fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  @media (max-width: 728px) {
    width: 100%;
  }
`;
export const Categories = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  justify-content: space-between;
  color: #718096;

  @media (max-width: 728px) {
    width: 100%;
    display: flex;
  }

  @media (max-width: 728px) {
    display: flex;
    flex-direction: column;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.2s;

    @media (max-width: 728px) {
      margin-top: 40px;
    }

    :hover {
      color: var(--blue);
      cursor: pointer;
    }

    svg {
      width: 32px;
      height: 32px;
    }
  }
`;
