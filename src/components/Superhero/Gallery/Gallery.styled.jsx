import styled from "@emotion/styled";

export const GalleryContainer = styled.div`
  color: #3b14ff;
  & > span:nth-of-type(n) {
    color: #aeaeae;
  }
  width: 300px;
  height: 200px;
`;

export const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;

  & > li:not(:last-of-type) {
    margin-right: 10px;
  }
`;
export const GalleryItem = styled.li`
  list-style: none;
  position: relative;
  width: 70px;
  height: 70px;
  margin-bottom: 5px;
  &:hover,
  &:focus {
    & > div:nth-of-type(n) {
      visibility: visible;
    }
  }
`;

export const GalleryImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
`;
export const ImageButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #00000080;
  width: 70px;
  height: 70px;

  visibility: hidden;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  & > button:not(:last-of-type) {
    margin-right: 5px;
  }
`;

export const ImageButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  outline: transparent;
  border: transparent;
  border-radius: 50%;
  background-color: transparent;

  &:hover,
  &:focus {
    background-color: #3a3a3a71;
  }
`;
