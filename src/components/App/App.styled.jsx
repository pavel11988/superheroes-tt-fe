import styled from "@emotion/styled";

export const AppContainer = styled.div``;
export const Title = styled.h1`
  text-align: center;
  text-shadow: 5px 5px 5px #5b06615d;
  color: #c0c0fff8;

  font-style: italic;
  font-size: 33px;
`;
export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const AddButton = styled.button`
  height: 50px;
  width: 50px;

  align-self: center;

  border: transparent;
  border-radius: 50%;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #00f300cb;

  &:hover,
  &:focus,
  &:active {
    background-color: #00701a;
    opacity: 0.7;
  }
`;
