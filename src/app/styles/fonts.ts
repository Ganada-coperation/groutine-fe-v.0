import { FontsTypes } from '@shared/types';

const createFontStyle = (family: string, weight: number, size: number, lineHeight: number) => `
  font-family: "${family}";
  font-weight: ${weight};
  font-size: ${size}px;
  line-height: ${lineHeight}px;
  letter-spacing: 0%;
`;

export const fonts: FontsTypes = {
  heading_bold_24px: createFontStyle('Pretendard', 700, 24, 34),
  heading_bold_22px: createFontStyle('Pretendard', 700, 22, 34),
  heading_bold_18px: createFontStyle('Pretendard', 700, 18, 34),
  heading_semibold_18px: createFontStyle('Pretendard', 600, 18, 22),
  heading_medium_20px: createFontStyle('Pretendard', 500, 20, 34),
  heading_medium_18px: createFontStyle('Pretendard', 500, 18, 34),
  body_bold_20px: createFontStyle('Pretendard', 700, 20, 24),
  body_bold_16px: createFontStyle('Pretendard', 700, 16, 24),
  body_bold_14px: createFontStyle('Pretendard', 700, 14, 24),
  body_medium_16px: createFontStyle('Pretendard', 500, 16, 24),
  caption_bold_14px: createFontStyle('Pretendard', 700, 14, 24),
  caption_medium_14px: createFontStyle('Pretendard', 500, 14, 24),
  detail_medium_12px: createFontStyle('Pretendard', 500, 12, 22),
  detail_medium_10px: createFontStyle('Pretendard', 500, 10, 22),
  button_medium_16px: createFontStyle('Pretendard', 500, 16, 24),
  button_semibold_13px: createFontStyle('Pretendard', 600, 13, 16),
  detail_regular_14px: createFontStyle('Pretendard', 500, 14, 16),
  detail_regular_10px: createFontStyle('Pretendard', 500, 10, 16),
};
