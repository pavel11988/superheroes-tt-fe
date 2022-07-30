import styled from "@emotion/styled";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;
export const ListNumbers = styled.ul`
  display: flex;
`;
export const PageNumber = styled.li`
  list-style: none;
  margin-right: 5px;
`;

export const PageButton = styled.button`
  width: 40px;
  height: 30px;

  font-size: 20px;

  border: none;
  border-radius: 10px;

  background-color: #3c3cffd2;
  color: white;

  outline: ${(props) => props.currentPage && "red"};

  &:hover,
  &:focus,
  &:active {
    outline: 2px solid blue;
    background-color: #000098d2;
    color: #00ccff;
  }
`;

export const CurrentPageButton = styled.button`
  width: 40px;
  height: 30px;

  font-size: 20px;
  font-weight: 700;

  outline: 1px solid #ff00bb;

  border: none;
  border-radius: 10px;

  background-color: #0000ffd2;
  color: white;

  outline: ${(props) => props.currentPage && "red"};

  &:hover,
  &:focus,
  &:active {
    outline: 2px solid blue;
    background-color: #000098d2;
    color: #00ccff;
  }
`;
