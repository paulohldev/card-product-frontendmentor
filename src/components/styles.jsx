import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Fraunces';
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop + 'px' : 0)};
  color: var(--very-dark-blue);
  font-size: 2.25rem;
`;

export const ProductImage = styled.img`
  display: block;
  max-width: 100%;
  object-fit: cover;
  object-position: top bottom;
  @media (max-width: 620px) {
    max-height: 300px;
    width: 100%;
  }
`;

export const ProductCategory = styled.h2`
  font-family: 'Montserrat';
  font-weight: ${({ weight }) => (weight ? weight : 500)};
  color: var(--dark-grayish-blue);
  font-size: 100%;
  letter-spacing: 4px;
`;

export const Paragraph = styled.p`
  font-family: 'Montserrat';
  color: var(--dark-grayish-blue);
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop + 'px' : 0)};
  line-height: 1.5;
`;

export const Price = styled.p`
  font-family: ${({ discount }) => (discount ? 'Montserrat' : 'Fraunces')};
  color: ${({ discount }) =>
    discount ? 'var(--dark-grayish-blue)' : 'var(--dark-cyan)'};
  font-size: ${({ discount }) => (discount ? '100%' : '2rem')};
  text-decoration: ${({ discount }) => (discount ? 'line-through' : 'none')};
`;

export const AddToCart = styled.button`
  width: 100%;
  background-color: var(--dark-cyan);
  color: var(--white);
  font-family: 'Montserrat';
  font-weight: 700;
  border: none;
  padding: 14px 20px;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  place-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 30px;
  transition: background-color 0.3s;
  &:hover {
    background-color: var(--very-dark-blue);
  }
`;
