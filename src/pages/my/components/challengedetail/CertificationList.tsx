import React from 'react';
import styled from 'styled-components';
import CertificationCard from './CertificationCard';
import { mockChallengeCertifications, Certification } from '@shared/api/mock_ChallengeCertification';
import { colors } from '@app/styles/colors';

const CertificationList: React.FC = () => {
  return (
    <Container>
      <Title>미션 인증 둘러보기</Title>
      <ScrollableContainer>
        <CardContainer>
          {mockChallengeCertifications.map((cert: Certification) => (
            <CertificationCard 
              key={cert.id}
              image={cert.image}
            />
          ))}
        </CardContainer>
      </ScrollableContainer>
    </Container>
  );
};

export default CertificationList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%; // 부모 컨테이너의 전체 높이를 차지하도록 설정
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.defaultPrimary};
  margin-bottom: 10px;
`;

const ScrollableContainer = styled.div`
  flex: 1; // 남은 공간을 모두 차지하도록 설정
  overflow-y: auto; // 세로 스크롤 허용
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;
