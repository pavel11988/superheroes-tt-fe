import styled from '@emotion/styled'

export const EditorContainer = styled.div`
   background: radial-gradient(circle, rgba(159,0,244,1) 0%, rgba(15,0,79,1) 100%);
    padding: 10px;
    border-radius: 25px;
`;

export const Title = styled.h3`
    text-align:center;
    color: white;
    font-size: 20px;
    font-style: oblique;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
`

export const Field = styled.input`
    margin-bottom: 10px;
    width: 250px;
    height: 25px;

    font-size: 15px;

    border: none;
    border-radius: 5px;

    &:hover,
    &:focus,
    &:active{
        outline:2px solid blue;
    }
`;
export const Area = styled.textarea`
    margin-bottom: 10px;
    resize: none;
    height: 40px;
    width: 250px;

    font-size: 15px;

    border: none;
    border-radius: 5px;

    &:hover,
    &:focus,
    &:active{
        outline:2px solid blue;
    }
`;
export const ButtonUpdate = styled.button`
    width: 150px;
    height: 35px;
    
    border: transparent;
    background-color: #529aff;
    border-radius: 10px;
    
    color: white;
    font-weight: 700;
    font-size: 14px;

    &:hover,
    &:focus,
    &:active{
        background-color: #3a70ba;
        color: #ffffff85;
    }
`;

export const ButtonClose = styled.button`
  width: 35px;
  height: 35px;

  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: transparent;

  margin-left: auto;

  background-color: #b60000;

  &:hover,
  &:focus,
  &:active {
    background-color: #780000;
    opacity: 0.7;
}

`;