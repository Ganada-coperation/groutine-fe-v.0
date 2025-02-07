import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface ChallengeCardProps {
  id: string;
  image: string;
  title: string;
  date: string;
  participants: number;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  id,
  image,
  title,
  date,
  participants,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/challenge/${id}`);
  };

  return (
    <Card onClick={handleCardClick}>
      <CardImage src={image} alt={title} />
      <CardContent>
        <CardHeader>
          <CategoryTag>카테고리</CategoryTag>
          <Participants>👤 {participants}</Participants>
        </CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDate>{date}</CardDate>
      </CardContent>
    </Card>
  );
};

export default ChallengeCard;


/* ✅ 카드 전체 */
const Card = styled.div`
  background-color: #f9f6f2;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

/* ✅ 카드 이미지 */
const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;

  @media (max-width: 767px) {
    height: 120px;
  }
  @media (min-width: 1200px) {
    height: 180px;
  }
`;

/* ✅ 카드 내용 */
const CardContent = styled.div`
  padding: 15px;
`;

/* ✅ 카드 헤더 */
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

/* ✅ 카테고리 태그 */
const CategoryTag = styled.span`
  background-color: #f3f4f6;
  color: #6b7280;
  padding: 5px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: bold;
`;

/* ✅ 참가자 수 */
const Participants = styled.span`
  font-size: 14px;
  color: #6b7280;
  font-weight: bold;
`;

/* ✅ 카드 제목 */
const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;

  @media (max-width: 767px) {
    font-size: 14px;
  }
  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;

/* ✅ 카드 날짜 */
const CardDate = styled.p`
  font-size: 14px;
  color: #6b7280;

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
