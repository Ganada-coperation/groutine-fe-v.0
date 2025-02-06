import React from "react";
import "../styles/index.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-overlay">
        <h1 className="header-title">다양한 챌린지에 도전하고</h1>
        <p className="header-subtitle">~~~~하세요!</p>
      </div>
    </header>
  );
};

export default Header;
