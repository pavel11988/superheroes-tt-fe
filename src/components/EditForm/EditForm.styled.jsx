import styled from "@emotion/styled";

export const EditorContainer = styled.div`
  width: 300px;
  height: auto;
  background: radial-gradient(
    circle,
    rgba(159, 0, 244, 1) 0%,
    rgba(15, 0, 79, 1) 100%
  );
  padding: 10px;
  border-radius: 25px;
  text-align: center;
`;

export const Title = styled.h3`
  text-align: center;
  color: white;
  font-size: 20px;
  font-style: oblique;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const Field = styled.input`
  margin-top: 3px;
  margin-bottom: 10px;
  width: 250px;
  height: 25px;

  font-size: 15px;

  border: none;
  border-radius: 5px;

  &:hover,
  &:focus,
  &:active {
    outline: 2px solid blue;
  }
`;

export const Label = styled.label`
  text-align: left;
  font-weight: 700;
  color: #0080e2;
  font-size: 15px;
`;

export const ErrorMessage = styled.div`
  font-size: 15px;
  color: red;
  margin-top: 10px;
  position: absolute;
  top: 27px;
`;

export const FieldContainer = styled.div`
  text-align: left;
  position: relative;
  height: 80px;

  &:not(:last-of-type(n)) {
    margin-bottom: 15px;
  }
`;

export const ButtonUpdate = styled.input`
  width: 150px;
  height: 35px;

  margin-top: 20px;

  border: transparent;
  background-color: #529aff;
  border-radius: 10px;

  color: white;
  font-weight: 700;
  font-size: 14px;

  &:disabled {
    background-color: #b0b0b0cf;
    color: #515151;
  }

  &:not(:disabled) {
    &:hover,
    &:focus,
    &:active {
      background-color: #3a70ba;
      color: #ffffff85;
    }
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

  background-color: #636363;

  &:hover,
  &:focus,
  &:active {
    background-color: #333333;
    opacity: 0.7;
  }
`;
