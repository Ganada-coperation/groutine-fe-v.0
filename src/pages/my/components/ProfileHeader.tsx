import React from 'react';
import styled from 'styled-components';
import UserIc from '@icon/ic-mypage-user.svg';
import EditIc from '@icon/ic-mypage-edit.svg';

interface ProfileHeaderProps {
  username: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ username }) => (
  <Header>
    <Title>마이페이지</Title>
    <ContentWrapper>
      <UserInfo>
        <Avatar src={UserIc} alt="User Icon" />
        <Username>{username}</Username>
      </UserInfo>
      <EditButton>
        <EditIcon src={EditIc} alt="Edit Icon" />
        수정하기
      </EditButton>
    </ContentWrapper>
  </Header>
);

export default ProfileHeader;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #02343f;
  margin-bottom: 16px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Username = styled.span`
  margin-left: 12px;
  font-size: 1.2em;
  font-weight: bold;
`;

const EditButton = styled.button`
  font-size: 14px;
  font-weight: 700;
  color: #02343f;
  padding: 8px 12px;
  border: 3px solid #02343f;
  border-radius: 50px;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #fffCf8;
    border-color: #bbb;
  }
`;

const EditIcon = styled.img`
  width: 16px;
  height: 16px;
`;
