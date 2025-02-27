import React from 'react';
import styled from 'styled-components';

interface CertificationCardProps {
  image: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ image }) => {
  return (
    <Container>
      <Image src={image} alt="챌린지 인증 사진" />
    </Container>
  );
};

export default CertificationCard;

const Container = styled.div`
  border-radius: 8px;
  overflow: hidden;  // Ensure image doesn't overflow the container
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;  // Ensure image covers the area nicely
  display: block;  // Remove any extra spacing below the image
`;

