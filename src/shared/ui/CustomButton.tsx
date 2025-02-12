import styled from "styled-components";
import { ActiveProps } from "@shared/types";


export interface ButtonProps extends ActiveProps {
  disabled?: boolean;
  onClick?: () => void;
  label: string;
  padding?: "12px" | "18px";
}

export const CustomButton = ({ $isActive, disabled, onClick, label, padding  }: ButtonProps) => {
  return <Button $isActive={$isActive} $padding={padding} disabled={disabled} onClick={onClick}>{label}</Button>;
}

interface ButtonStyleProps extends ActiveProps {
  $padding?: "12px" | "18px";
}

const Button = styled.button<ButtonStyleProps>`
  width: 100%;
  background-color: ${({ theme, $isActive }) => $isActive ? theme.colors.defaultPrimary : theme.colors.darkerSecondary};
  color: ${({ theme, $isActive }) => $isActive ? theme.colors.defaultSecondary : theme.colors.mediumGray};
  font: ${({ theme }) => theme.fonts.button_medium_16px};
  border-radius: 10px;
  padding: ${({ $padding }) => $padding ? `${$padding} 0` : `18px 0`};
`;
