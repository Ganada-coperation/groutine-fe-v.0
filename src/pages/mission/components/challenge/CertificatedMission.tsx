import styled from "styled-components";
import { useNavigate } from "react-router";

interface ChallengeProps {
  id: number;
  title: string;
  dDay: number;
  imageUrl?: string;
  startDate: string;
  endDate: string;
}

const CertificatedMission = ({ id, imageUrl }: ChallengeProps) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`${id}`);
  };

  return (
    <ChallengeContainer onClick={handleNavigate}>
      <StyledImg src={imageUrl} alt="" />
    </ChallengeContainer>
  );
};

export default CertificatedMission;

const ChallengeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border: 1px solid ${({ theme }) => theme.colors.lightestestPrimary};
`;

const StyledImg = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 12vh;
  object-fit: cover;
`;

