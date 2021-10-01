import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  min-height: 100vh;
  max-width: 1120px;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;

  img {
    width: 100%;
    height: 600px;
    margin-right: -100px;
  }
`;

export const FooterContent = styled.div`
  margin-top: 40px;
  background-color: #f7fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;
export const Categories = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  justify-content: space-between;
  color: #718096;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.2s;

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
