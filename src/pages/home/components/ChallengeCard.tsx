import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';

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
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleCardClick = () => {
    navigate(`/challenge/${id}`);
  };

  return (
    <Card isMobile={isMobile} onClick={handleCardClick}>
      <CardImage src={image} alt={title} />
      <CardContent>
        <CardHeader>
          <CategoryParticipants>
          <CategoryTag>카테고리</CategoryTag>
          <Participants>👤 {participants}</Participants>
          </CategoryParticipants>
        </CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDate>{date}</CardDate>
      </CardContent>
    </Card>
  );
};

export default ChallengeCard;

interface CardProps {
    isMobile: boolean;
}

const Card = styled.div<CardProps>`
  position: relative;
  width: ${(props) => (props.isMobile ? '100%' : '190px')};
  height: auto;
  aspect-ratio: 190 / 242;
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  margin: 0 auto;

  &:hover {
    transform: scale(1.02);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 162px;
  object-fit: cover;
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
`;

const CategoryTag = styled.span`
  background-color: #ccd9dd;
  color: #356778;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  padding: 4px 8px;
  margin-right: 5px;
`;

const CategoryParticipants = styled.div`
  display: flex;
  align-items: center;
`;

const Participants = styled.span`
  background-color: #ccd9dd;
  color: #356778;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  padding: 4px 10px;
`;

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #02343f;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CardDate = styled.p`
  font-size: 12px;
  color: #bdbdbd;
`;
