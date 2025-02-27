import React from 'react';
import styled from 'styled-components';
import UserIc from '@shared/assets/icon/ic-mypage-user.svg';
import EditIc from '@shared/assets/icon/ic-mypage-edit.svg';
import { fonts } from '@app/styles/fonts';
import { colors } from '@app/styles/colors';

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
  border-bottom: 1px solid ${colors.lightGray};
  margin-bottom: 20px;
`;

const Title = styled.h2`
  ${fonts.heading_bold_20px};
  color: ${colors.defaultPrimary};
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
  ${fonts.button_medium_16px};
  color: ${colors.defaultPrimary};
  padding: 8px 12px;
  border: 3px solid ${colors.defaultPrimary};
  border-radius: 50px;
  background-color: ${colors.lightestSecondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: ${colors.lighterSecondary};
    border-color: ${colors.lightGray};
  }
`;

const EditIcon = styled.img`
  width: 16px;
  height: 16px;
`;
