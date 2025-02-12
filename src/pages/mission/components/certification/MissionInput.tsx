import styled from "styled-components";

const MissionInput = () => {
  return (
    <MissionInputContainer>
      <Label>미션 설명<span>*선택사항</span></Label>
      <TextArea placeholder="간단한 설명을 작성해 주세요" />
    </MissionInputContainer>
  );
};

export default MissionInput;

const MissionInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.p`
  font: ${({ theme }) => theme.fonts.heading_semibold_18px};
  color: ${({ theme }) => theme.colors.defaultPrimary};
  
  span {
    font: ${({ theme }) => theme.fonts.detail_regular_14px};
    color: ${({ theme }) => theme.colors.darkGray};
    margin-left: 7px;
  }
`;

const TextArea = styled.textarea`
  font: ${({ theme }) => theme.fonts.detail_regular_14px};
  height: 30vh;
  line-height: 20px;
  padding: 22px;
  color: ${({ theme }) => theme.colors.defaultPrimary};
  background-color: white;
  border: 2px solid ${({ theme }) => theme.colors.defaultSecondary};
  border-radius: 3px;
  outline: none;
  resize: none;
`;

