import styled from "@emotion/styled";

export const ModalContainer = styled.div`
  position: relative;
`;
export const Button = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;

  width: 35px;
  height: 35px;

  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: transparent;

  margin-left: auto;

  background-color: #636363;

  &:hover,
  &:focus,
  &:active {
    background-color: #333333;
    opacity: 0.7;
  }
`;
