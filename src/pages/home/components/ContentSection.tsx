import React from "react";
import styled from "styled-components";
//
const ContentSection: React.FC = () => {
  return (
    <ContentContainer>
      <Title>디지털 디톡스 가보자!</Title>
      <SubInfo>2024.06.01 - 2024.08.02 | 99명의 챌린저와 함께 하고 있어요</SubInfo>
      <PriceSection>
        <Price>10,000원</Price>
        <Price>990,000원</Price>
      </PriceSection>
      <Divider />
      <Section>
        <SectionTitle>챌린지 설명</SectionTitle>
        <Description>
          일일 스크린 타임 4시간 이상 달성 시 챌린지 순위 선정에서 제한됩니다.
        </Description>
      </Section>
      <Divider />
      <Section>
        <SectionTitle>미션 설명</SectionTitle>
        <Description>
          1만보 달성하기, 식단 인증하기 등 다양한 미션을 수행하세요.
        </Description>
      </Section>
    </ContentContainer>
  );
};

export default ContentSection;

const ContentContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #02343f;
  margin-bottom: 10px;
`;

const SubInfo = styled.p`
  font-size: 14px;
  color: #02343f;
  margin-bottom: 20px;
`;

const PriceSection = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 20px;
`;

const Price = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #356778;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #f2e7d9;
  margin: 20px 0;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #356778;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #011f2b;
  line-height: 1.6;
`;
