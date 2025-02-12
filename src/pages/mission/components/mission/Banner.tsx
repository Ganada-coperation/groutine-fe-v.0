import styled from "styled-components";
import ImgBanner from "@img/img-banner.png";
import IcStar from "@icon/ic-star.svg";

const Banner = () => {
  return (
    <BannerContainer>
      <div>
        <Inner>
          <BoldText>{'닉네임'}</BoldText>님은 지금<br />
          <BoldText>{'N'}개</BoldText>의 챌린지 도전중
        </Inner>
        <img src={IcStar} alt=''/>
      </div>
      <SmallText>도전 중인 챌린지와 해야할 미션을 모아봤어요!</SmallText>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-image: url(${ImgBanner});
  background-size: cover;
  padding: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  
  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

const Inner = styled.p`
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colors.darkestPrimary};
  font: ${({ theme }) => theme.fonts.body_bold_20px};
`;

const BoldText = styled.span`
  color: ${({ theme }) => theme.colors.lighterPrimary};
`;

const SmallText = styled.p`
  font: ${({ theme }) => theme.fonts.detail_medium_12px};
  color: #6f6f6f;
`;
