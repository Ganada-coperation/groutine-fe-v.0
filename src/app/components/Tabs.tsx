import React from "react";
import "../styles/index.css";



const Tabs: React.FC = () => {
  return (
    <div className="tabs">
      <button className="tab-button active">최신순</button>
      <button className="tab-button">인기순</button>
    </div>
  );
};

export default Tabs;
