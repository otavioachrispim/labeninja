import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 728px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #e2e8f0;
  padding: 4px;
  border-radius: 10px;

  input {
    border: none;
    background-color: transparent;
    margin-left: 8px;
    padding: 4px;
    align-items: center;
  }
`;

export const Content = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
