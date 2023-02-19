import React from 'react';
import {
  AddToCart,
  Paragraph,
  Price,
  ProductCategory,
  ProductImage,
  Title,
} from '../styles';
import Cart from '../../assets/images/icon-cart.svg';
import ProductPhotoDesktop from '../../assets/images/image-product-desktop.jpg';
import ProductPhotoMobile from '../../assets/images/image-product-mobile.jpg';
import styled from 'styled-components';

const CardBg = styled.div`
  display: flex;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  max-width: 600px;
  height: 100%;
  @media (max-width: 620px) {
    margin: 20px;
    flex-direction: column;
  }
`;

const CardItems = styled.div`
  flex: ${({ value }) => (value ? value : 0)};
  padding: ${({ paddingValue }) => (paddingValue ? paddingValue + 'px' : 0)};
  align-self: ${({ alignCenter }) => (alignCenter ? 'center' : 'initial')};
`;

const FlexDivisor = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
`;

const Card = () => {
  const [mobile, setMobile] = React.useState(false);

  React.useEffect(() => {
    const verifyClientWidth = () => {
      if (window.innerWidth >= 600) {
        return setMobile(true);
      }
      return setMobile(false);
    };
    verifyClientWidth();

    window.addEventListener('resize', verifyClientWidth);

    return () => window.removeEventListener('resize', verifyClientWidth);
  }, []);

  return (
    <CardBg>
      <CardItems value={2}>
        <ProductImage
          src={mobile ? ProductPhotoDesktop : ProductPhotoMobile}
          alt={'Gabrielle Essence Eau De Parfum'}
        />
      </CardItems>
      <CardItems alignCenter paddingValue={30} value={1.5}>
        <ProductCategory>PERFUME</ProductCategory>
        <Title paddingTop={20}>Gabrielle Essence Eau De Parfum</Title>
        <Paragraph paddingTop={20}>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polger, Perfumer-Creator for the House of CHANEL.
        </Paragraph>
        <FlexDivisor>
          <Price>$149.99</Price>
          <Price discount>$169.99</Price>
        </FlexDivisor>
        <AddToCart>
          <img src={Cart} alt="Cart Icon" />
          Add to Cart
        </AddToCart>
      </CardItems>
    </CardBg>
  );
};

export default Card;
