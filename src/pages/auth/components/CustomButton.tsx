import styled from "styled-components";
import { ActiveProps } from "@shared/types";

export interface ButtonProps extends ActiveProps {
  disabled?: boolean;
  onClick?: () => void;
  label: string;
}

export const CustomButton = ({ $isActive, disabled, onClick, label  }: ButtonProps) => {
  return <Button $isActive={$isActive} disabled={disabled} onClick={onClick}>{label}</Button>;
}

const Button = styled.button<ActiveProps>`
  width: 100%;
  background-color: ${({ theme, $isActive }) => $isActive ? theme.colors.defaultPrimary : theme.colors.darkerSecondary};
  color: ${({ theme, $isActive }) => $isActive ? theme.colors.defaultSecondary : theme.colors.mediumGray};
  font: ${({ theme }) => theme.fonts.button_medium_16px};
  border-radius: 10px;
  padding: 18px 0;
`;
