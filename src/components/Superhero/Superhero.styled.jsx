import styled from "@emotion/styled";

export const Card = styled.li`
  width: 250px;
  max-height: 1000px;
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

export const Nickname = styled.h3`
  text-align: center;
  color: #a2e8a2;
`;
export const RealName = styled.h4`
  text-align: center;
  color: #5a5a5a;
`;

export const ButtonUpload = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;

  border: transparent;

  background-color: #009700;

  &:not(:disabled) {
    &:hover,
    &:focus {
      background-color: #007514;
      opacity: 0.7;
    }
  }
`;
