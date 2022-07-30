import styled from "@emotion/styled";

export const UploadContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 35px;
  position: relative;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const UploadInput = styled.input`
  background-color: #0261e782;
  border-radius: 10px;
  width: 150px;
`;

export const ButtonUpload = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border: transparent;

  background-color: #009700;

  &:disabled {
    background-color: #4f4f4f;
    opacity: 0.7;
  }

  &:not(:disabled) {
    &:hover,
    &:focus {
      background-color: #007514;
      opacity: 0.7;
    }
  }
`;

export const ErrorContainer = styled.div`
  position: absolute;
  top: 40px;
`;
export const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
`;
