import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  object-fit: cover;
`;
const Img = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 25px;
  filter: brightness(65%);
`;

const TextWrapper = styled.div`
  margin-top: -175px;
  margin-bottom: 150px;
  @media screen and (max-width: 620px) {
    margin-top: -160px;
    margin-bottom: 130px;
  }
  @media screen and (max-width: 480px) {
    margin-top: -180px;
    margin-bottom: 110px;
  }
`;

const H1 = styled.h1`
  filter: brightness(100%);
  color: white;
  text-align: center;
  font-weight: 100;
  font-size: 2.5rem;
  @media screen and (max-width: 620px) {
    font-size: 2rem;
  }
`;
const Banner = () => {
  return (
    <Wrapper>
      <Img src="./img/banner/banner.png" alt="banner" />
      <TextWrapper>
        <H1>Chez vous, partout et ailleurs</H1>
      </TextWrapper>
    </Wrapper>
  );
};

export default Banner;
