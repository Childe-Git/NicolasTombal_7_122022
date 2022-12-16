import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Img = styled.img`
  width: 100%;
  filter: brightness(75%);
  border-radius: 25px;
`;

const Banner = () => {
  return (
    <Wrapper>
      <Img src="./img/banner/about-banner.png" alt="banner" />
    </Wrapper>
  );
};

export default Banner;
