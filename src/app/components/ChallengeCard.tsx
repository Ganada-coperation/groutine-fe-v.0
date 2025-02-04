import "../styles/index.css";


interface ChallengeCardProps {
  image: string;
  title: string;
  date: string;
  participants: number;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ image, title, date, participants }) => {
  return (
    <div className="card">
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
