import "../styles/index.css";
import { useNavigate } from "react-router-dom";

interface ChallengeCardProps {
  id: string; // 챌린지의 고유 ID
  image: string;
  title: string;
  date: string;
  participants: number;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ id, image, title, date, participants }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/challenge/${id}`); // 해당 챌린지의 상세 페이지로 이동
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <div className="card-header">
          <span className="card-category">카테고리</span>
          <span className="card-participants">👤 {participants}</span>
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-date">{date}</p>
      </div>
    </div>
  );
};

export default ChallengeCard;
