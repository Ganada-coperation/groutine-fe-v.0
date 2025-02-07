import React from "react";
import styled from "styled-components";

const Tabs: React.FC = () => {
  return (
    <TabsContainer>
      <TabButton className="active">최신순</TabButton>
      <TabButton>인기순</TabButton>
    </TabsContainer>
  );
};

export default Tabs;


const TabsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding: 20px;

  @media (max-width: 767px) {
    padding: 10px; /* 모바일 */
    flex-wrap: wrap;
  }
`;


const TabButton = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  border-radius: 50px;
  background-color: #f9f6f2;
  color: #02343f;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &.active {
    background-color: #02343f;
    color: #f9f6f2;
  }

  &:hover {
    background-color: #011f26;
    color: #ffffff;
  }

  @media (max-width: 767px) {
    padding: 8px 16px;
    font-size: 14px; /* 모바일 */
  }
`;
