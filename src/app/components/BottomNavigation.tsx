import React from "react";
import "../styles/index.css";

const BottomNavigation: React.FC = () => {
  return (
    <nav className="bottom-nav">
      <div className="nav-item active">
        <span>🏠</span>
        <p>챌린지</p>
      </div>
      <div className="nav-item">
        <span>📅</span>
        <p>미션</p>
      </div>
      <div className="nav-item">
        <span>👤</span>
        <p>MY</p>
      </div>
    </nav>
  );
};

export default BottomNavigation;
