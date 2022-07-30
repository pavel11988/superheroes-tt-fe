import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;

  & > li:not(:last-of-type) {
    margin-right: 25px;
  }
`;
