import styled from "styled-components";
import ImgBanner from "@img/img-banner.png";
import IcStar from "@icon/ic-star.svg";
import { motion } from "framer-motion";

const Banner = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <BannerContainer>
      <div>
        <Inner
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <BoldText
            initial={{ scale: 0.8, rotate: -5, color: '#6f6f6f' }}
            animate={{ scale: 1, rotate: 0, color: '#FF7F50' }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >{'닉네임'}</BoldText>님은 지금<br />
          <BoldText
            initial={{ scale: 0.8, rotate: -5, color: '#6f6f6f' }}
            animate={{ scale: 1, rotate: 0, color: '#FF7F50' }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >{'N'}개</BoldText>의 챌린지 도전중
        </Inner>
        <MotionImage
          src={IcStar} alt=""
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        />
      </div>
      <SmallText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >도전 중인 챌린지와 해야할 미션을 모아봤어요!</SmallText>
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

const Inner = styled(motion.p)`
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colors.darkestPrimary};
  font: ${({ theme }) => theme.fonts.body_bold_20px};
`;

const BoldText = styled(motion.span)`
  color: ${({ theme }) => theme.colors.lighterPrimary};
`;


const MotionImage = styled(motion.img)`
`;

const SmallText = styled(motion.p)`
  font: ${({ theme }) => theme.fonts.detail_medium_12px};
  color: #6f6f6f;
`;
