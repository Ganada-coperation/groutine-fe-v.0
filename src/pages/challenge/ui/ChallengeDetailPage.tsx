import React from "react";
import { useParams } from "react-router-dom";

export const ChallengeDetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="challenge-detail">
      <header className="challenge-header">
        <h1>챌린지 상세</h1>
      </header>
      <div className="challenge-image">
        <img src={`/images/${id}.jpg`} alt="챌린지 이미지" />
      </div>
      <section className="challenge-content">
        <h2>챌린지 제목</h2>
        <p>챌린지 기간: 2024.06.01 - 2024.08.02</p>
        <p>참여자 수: 99명</p>
        <div className="price">
          <p>참가비: 10,000원</p>
          <p>총 상금: 990,000원</p>
        </div>
        <h3>챌린지 설명</h3>
        <p>챌린지 관련 상세 설명을 여기에 작성합니다.</p>
        <h3>미션 설명</h3>
        <ul>
          <li>미션 1: 1만 보 걷기</li>
          <li>미션 2: 식단 인증</li>
        </ul>
        <h3>완료 혜택</h3>
        <p>완료 시 다양한 혜택을 받을 수 있습니다.</p>
        <button className="participate-button">참가하기</button>
      </section>
    </div>
  );
};
