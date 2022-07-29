import styled from "@emotion/styled";

export const Card = styled.li`
  width: 250px;
  max-height: 800px;
  list-style: none;

  background: radial-gradient(
    circle,
    rgba(24, 0, 130, 1) 0%,
    rgba(0, 212, 255, 1) 0%,
    rgba(116, 113, 247, 1) 100%,
    rgba(73, 73, 150, 1) 100%
  );

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 20px 15px;
  border-radius: 10px;
  color: #f0f0f0;

  font-size: 16px;
  font-weight: 700;
`;
export const Avatar = styled.img`
  width: 230px;
  align-self: center;
  border-radius: 10px;
`;

export const Nickname = styled.h3`
  text-align: center;
  color: #a2e8a2;
`;
export const RealName = styled.h4`
  text-align: center;
  color: #5a5a5a;
`;

export const Characteristic = styled.div`
min-height: 200px;
max-height: 250px;
`

export const Descriprion = styled.p`
  color: #4d4d4d;
  text-overflow: ellipsis;

  & > span:nth-of-type(n) {
    color: #3b14ff;
  }
`;
export const Superpowers = styled.p`
  & > span:nth-of-type(n) {
    color: #3b14ff;
  }
`;
export const CatchPhrase = styled.p`
  & > span:nth-of-type(n) {
    color: #3b14ff;
  }
`;

export const Gallery = styled.p`
  color: #3b14ff;
  & > span:nth-of-type(n) {
    color: #aeaeae;
  }
`;

export const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  & > li:not(:last-of-type){
    margin-right: 10px;
  }
`;
export const GalleryItem = styled.li`
  list-style: none;
  position: relative;
  width: 70px;
  height: 70px;

  &:hover,
  &:focus{
    & > div:nth-of-type(n){
      visibility: visible;
    }
  }
`;

export const GalleryImage = styled.img`
  width: 70px;
  height: 70px;
  
`
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
  transform: translate(-50%,-50%);

  & > button:not(:last-of-type){
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
  &:focus{
    background-color:#3a3a3a71;
  }


`

export const ButtonsContainer = styled.div`
  text-align: center;
`;
export const ButtonDelete = styled.button`
  margin-right: 15px;
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

export const ButtonUpload = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;

  border: transparent;

  background-color: #009700;

  &:hover,
  &:focus {
    background-color: #007514; 
    opacity: 0.7;
  }
`