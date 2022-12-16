import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  text-align: center;
  padding: 20px;
  border-radius: 25px 25px 0 0;
  flex-shrink: 0;
`;

const Img = styled.img`
  width: 150px;
  border: 2px solid black;
`;

const Footer = () => {
  return (
    <footer>
      <Container>
        <Img src="./img/logo/footer-logo.svg" alt="logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </Container>
    </footer>
  );
};

export default Footer;
