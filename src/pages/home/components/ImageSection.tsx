import React from "react";
import styled from "styled-components";

const ImageSection: React.FC = () => {
  return (
    <Section>
      <ChallengeImage src="/images/detox.jpg" alt="챌린지 이미지" />
      <TagContainer>
        <Tag>랜덤박스</Tag>
        <Tag>운동</Tag>
      </TagContainer>
    </Section>
  );
};

export default ImageSection;


const Section = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  background-color: #f5f5f5;
`;

const ChallengeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TagContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
  display: flex;
  gap: 10px;
`;

const Tag = styled.div`
  padding: 6px 20px;
  background: #ccd4d3;
  border-radius: 20px;
  font-size: 14px;
  color: #02343f;
`;
