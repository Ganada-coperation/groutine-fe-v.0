import styled, { css, keyframes } from "styled-components";
import { ActiveProps } from "@shared/types";

export const Container = styled.div`
                  display: flex;
height: 100%;
flex-direction: column;
align-content: center;
justify-content: space-between;
padding: 10px 20px;
`;

export const Logo = styled.img`
  margin-top: 10px;
  height: 24px;
`;

export const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideDown = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

export const Notification = styled.p<ActiveProps>`
  color: ${({ theme, $isActive }) => $isActive ? theme.colors.lighterPrimary : theme.colors.red};
  font: ${({ theme }) => theme.fonts.detail_medium_12px};

  &::after {
    content: '\\200B'; // 유니코드 Zero-width space
    display: inline-block;
  }
`;

export const Label = styled.p`
  font: ${({ theme }) => theme.fonts.body_bold_16px};
  color: ${({ theme }) => theme.colors.darkestPrimary};
`;

export const Section = styled.div<{ $isVisible?: boolean }>`
  display: flex;
  flex-direction: column;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  ${({ $isVisible }) =>
  $isVisible
    ? css`
        animation: ${slideUp} 0.3s ease-in-out;
      `
    : css`
        animation: ${slideDown} 0.3s ease-in-out;
      `}
`;
