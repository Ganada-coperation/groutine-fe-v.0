import styled from 'styled-components';
import { HeaderAction } from '@shared/types';

interface AppBarProps {
  title?: string;
  leftHeaderAction?: HeaderAction;
  rightHeaderActionArr?: HeaderAction[];
}

const AppBar = ({ title, leftHeaderAction, rightHeaderActionArr }: AppBarProps) => {
  const { icon, onClick } = leftHeaderAction? leftHeaderAction : { icon: '', onClick: undefined };

  return (
    <Wrapper>
      <img
        src={icon}
        onClick={onClick ? onClick : undefined}
        style={{ background: 'none' }}
      />
      <p>{title}</p>
      <div>
        {rightHeaderActionArr?.map((action, index) => (
          <img
            key={index}
            src={action.icon}
            onClick={action.onClick}
            style={{ background: 'none' }}
            alt="right-icon"
          />
        ))}
      </div>
    </Wrapper>
  );
};
export default AppBar;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100vw;
  max-width: 440px;
  min-height: 7.5vh;
  align-items: center;
  padding: 0 16px;
  img {
    flex-shrink: 0;
  }
  p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: ${({ theme }) => theme.colors.darkestPrimary};
    font: ${({ theme }) => theme.fonts.heading_bold_18px};
    margin: 0;
    text-align: center;
  }
  div {
    display: flex;
    gap: 24px;
  }
`;
