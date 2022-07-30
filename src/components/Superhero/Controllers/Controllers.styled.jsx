import styled from "@emotion/styled";

export const ButtonsContainer = styled.div`
  display: flex;
  align-self: center;
`;

export const ButtonWrapper = styled.div`
  width: 50px;
  height: 50px;
  &:not(:last-of-type) {
    margin-right: 15px;
  }
`;

export const ButtonDelete = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;

  border: transparent;

  background-color: #b90000;

  &:hover,
  &:focus {
    background-color: #780000;
    opacity: 0.7;
  }
`;
export const ButtonChange = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;

  border: transparent;

  background-color: #c5a100;

  &:hover,
  &:focus {
    background-color: #867200;
    opacity: 0.7;
  }
`;
