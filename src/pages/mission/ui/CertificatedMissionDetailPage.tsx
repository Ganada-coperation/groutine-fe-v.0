import styled from "styled-components";
import AppBar from "@shared/ui/AppBar.tsx";
import IcArrowLeft from "@icon/ic-arrow-left-light.svg";
import { HeaderAction } from "@shared/types";
import { useNavigate } from "react-router";
import ImgMissionExample from "@img/img-mission-example.png";

export const CertificatedMissionDetailPage = () => {
    const navigate = useNavigate();
    const leftHeaderAction: HeaderAction = {
      icon: IcArrowLeft, onClick: () => navigate(-1),
    };
    const title = "하루 식단 인증하기";
    const description = "메모는 흰색으로 색 맞춰주세요! 메모에도 글자 제한이 있는지는 잘 모르겠지만 ... 만약 없다면 메모멤모메모는 흰색으로 색 맞춰주세요! 메모에도 글자 제한이 있는지는 잘 모르겠지만 ... 만약 없다면 메모멤모메모는 흰색으로 색 맞춰주세요! 메모에도 글자 제한이 있는지는 잘 모르겠지만 ... 만약 없다면 메모멤모메모는 흰색으로 색 맞춰주세요! 메모에도 글자 제한이 있는지는 잘 모르겠지만 ... 만약 없다면 메모멤모";

    return (
      <CertificatedMissionDetailPageContainer>
        <AppBar leftHeaderAction={leftHeaderAction} title="인증샷" color="lightestSecondary"/>
        <Inner>
          <img src={ImgMissionExample} alt="" />
          <ContentContainer>
            <Title>{title}<Report onClick={() => alert("신고 완료")}>신고하기</Report></Title>
            <Description>{description}</Description>
          </ContentContainer>
        </Inner>
      </CertificatedMissionDetailPageContainer>
    );
  }
;

const CertificatedMissionDetailPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.defaultPrimary};
  height: 100%;
`;

const Inner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 22px 0 37px;
  gap: 14px
`;

const Title = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font: ${({ theme }) => theme.fonts.heading_bold_24px};
  color: ${({ theme }) => theme.colors.lightestSecondary};
`;

const Report = styled.span`
  font: ${({ theme }) => theme.fonts.detail_regular_10px};
  color: ${({ theme }) => theme.colors.mediumGray};
`;

const Description = styled.p`
  font: ${({ theme }) => theme.fonts.detail_regular_10px};
  color: ${({ theme }) => theme.colors.lightestSecondary};
`;
