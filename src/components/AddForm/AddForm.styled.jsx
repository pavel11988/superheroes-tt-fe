import styled from '@emotion/styled'


export const FormContainer = styled.div`
    width:300px;
    height: auto;
    padding: 10px;
    border-radius: 25px;
    background: radial-gradient(circle, rgba(131,58,180,1) 11%, rgba(36,0,157,1) 55%, rgba(0,124,157,1) 100%);

`

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
export const ButtonAdd = styled.button`
    width: 150px;
    height: 35px;
    
    margin-top: 20px;

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