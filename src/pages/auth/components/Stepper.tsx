import styled from 'styled-components';

function Stepper({totalStep, step }: { totalStep: number, step: number }) {
  return (
    <Container>
      {Array.from({ length: totalStep }, (_, index) => (
        <ItemBox key={index} $active={step === index + 1} />
      ))}
    </Container>
  );
}

export default Stepper;

const Container = styled.div`
  height: 6px;
  display: flex;
  gap: 8px;
`;
const ItemBox = styled.div<{ $active: boolean }>`
  transition: all 0.7s ease-in-out;
  ${({ $active, theme }) =>
    $active
      ? `width: 18px; background: ${theme.colors.lightestestPrimary}; border-radius: 100px; `
      : `width: 6px; background: ${theme.colors.mediumGray}; border-radius: 50%; `}
`;