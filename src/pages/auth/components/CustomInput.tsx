import styled from "styled-components";

interface InputProps {
  label: string;
  type: string;
  maxLength: number;
  placeholder: string;
  register: any;
  registerKey: string;
}

const CustomInput = ({ label, type, maxLength, placeholder, register, registerKey }: InputProps) => {
  return (
    <>
      <Label>{label}</Label>
      <Input type={type} placeholder={placeholder} {...register(registerKey)} maxLength={maxLength} />
    </>
  );
};

export default CustomInput;

const Label = styled.p`
  font: ${({ theme }) => theme.fonts.body_bold_16px};
  color: ${({ theme }) => theme.colors.darkestPrimary};
`;

const Input = styled.input`
  width: 100%;
  border-radius: 10px;
  padding: 12px 4px;
  color: ${({ theme }) => theme.colors.darkestPrimary};
  background-color: ${({ theme }) => theme.colors.darkerSecondary};
  font: ${({ theme }) => theme.fonts.body_medium_16px};
  border: none;
  outline: none;
  text-align: center;
  margin-top: 8px;
`;
