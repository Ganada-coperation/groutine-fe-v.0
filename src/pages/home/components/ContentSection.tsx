import React from "react";
import styled from "styled-components";

const ContentSection: React.FC = () => {
  return (
    <ContentContainer>
      <TitleWrapper>
        <Title>디지털 디톡스 가보자!</Title>
        <Date>2024.06.01 - 2024.08.02 </Date>
        <SubInfo>99명의 챌린저와 함께 하고 있어요</SubInfo>

        <Divider className="first-divider" />

        <Section>
          <SectionTitle>챌린지 설명</SectionTitle>
          <ChallengeSpecificDescription>
            일일 스크린 타임 4시간 이상 달성 시 챌린지 순위 선정에서 제한됩니다.
          </ChallengeSpecificDescription>
          <ChallengeSpecificDescription>
            일일 스크린 타임 4시간 이상 달성 시 챌린지 순위 선정에서 제한됩니다.
          </ChallengeSpecificDescription>
          <CommonDescription>
            일일 미션을 통해 챌린지의 순위가 부여됩니다.
            매일 매일 순위를 확인하면 자신의 순위를 올려보세요!
          </CommonDescription>
          <CommonDescription>
            필수 미션을 95% 달성 시 포인트가 지급되며 선택 미션을 통해 순위를 올릴 수 있습니다! 포인트는 마지막 순위에 따라 차등 지급되며, 포인트로 랜덤 선물을 교환 가능합니다!
          </CommonDescription>
        </Section>
        <Divider />

        <Section>
          <SectionTitle>미션 설명</SectionTitle>
          <MissionContainer>
            <Mission>
              <MissionTitle>1만보 달성하기</MissionTitle>
              <MissionDescription>
                1. 스마트폰의 걸음 수 측정 앱(예: 삼성 헬스, 애플 건강 앱) 또는 스마트워치를
                이용하여 1만보 이상 걸은 기록을 확인
                <br />
                2. 걸음 수와 날짜가 표시된 스크린샷을 촬영
                <br />
                3. 챌린지 인증 페이지에 스크린샷 업로드
              </MissionDescription>
            </Mission>
            <Mission>
              <MissionTitle>식단 인증하기</MissionTitle>
              <MissionDescription>
                1. 하루 동안 섭취한 식단을 사진으로 촬영
                <br />
                2. 균형 잡힌 식단(탄수화물, 단백질, 채소 포함)을 인증하도록 권장
                <br />
                3. 인증 사진과 함께 간단한 식단 설명(예: 아침 – 닭가슴살 샐러드, 점심 – 현미밥과 연어구이, 저녁 – 고구마와 계란)을 작성 후 제출
              </MissionDescription>
            </Mission>
          </MissionContainer>
        </Section>
        <Divider/>
      </TitleWrapper>
    </ContentContainer>
  );
};

export default ContentSection;

// ✅ 스타일 정의
const ContentContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 0px;
  width: 100%;
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin: 0 auto 40px; /* 중앙 정렬 */
  padding: 20px;
  background-color: #fffcf8;
  border-radius: 40px 40px 0 0;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #02343f;
  margin-bottom: 15px;
  margin-top: 20px;
`;

const Date = styled.p`
  font-size: 14px;
  color: #02343f;
  margin-bottom: 10px;
  margin-left: 30px;
`;
const SubInfo = styled.p`
  font-size: 14px;
  color: #02343f;
  margin-bottom: 10px;
  margin-left: 30px;
`;


const Divider = styled.hr`
  border: none;
  border-top: 1px solid #f2e7d9;
  margin: 20px 0;

 &.first-divider {
    border-top-width: 10px; /* 첫 번째 Divider의 두께를 설정 */
    border-top-color: #fff8ea;
    border-top-style: solid;
    width: 100vw;
    box-sizing: border-box; /* padding 포함하여 크기 계산 */
    margin-left: calc(-50vw + 50%); /* 좌측으로 밀어내기 */
    margin-right: calc(-50vw + 50%); /* 우측으로 밀어내기 */
    
  }
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


const ChallengeSpecificDescription = styled.p`
  font-size: 14px;
  color: #011f2b;
  line-height: 1.6;
  margin-bottom: 20px;

`;

const CommonDescription = styled.p`
  font-size: 14px;
  color: #02343f;
  line-height: 1.6;
  margin-bottom: 20px;

`;

const MissionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Mission = styled.div`
  margin-bottom: 20px;
`;

const MissionTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #356778;
  margin-bottom: 10px;
`;

const MissionDescription = styled.p`
  font-size: 14px;
  color: #011f2b;
  line-height: 1.6;
`;
