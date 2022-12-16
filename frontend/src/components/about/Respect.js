import React, { useState } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  width: 100%;
  background-color: #ff6060;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  color: white;
  user-select: none;
  &:hover {
    cursor: pointer;
    filter: brightness(110%);
  }
`;
const H1 = styled.h1`
  font-size: 1.2rem;
  font-weight: 100;
  padding-left: 20px;
`;
const Img = styled.img`
  padding-right: 20px;
`;
const P = styled.p`
  color: #ff6060;
  font-size: 1.2rem;
  padding: 12px;
  margin-top: -10px;
`;

const Container = styled.div`
  background-color: #e5e5e5;
  border-radius: 5px;
`;

const Content = styled.div`
  animation: contentAnim forwards 250ms;
  background-color: #e5e5e5;
  border-radius: 5px;
  @keyframes contentAnim {
    from {
      opacity: 0;
      transform: translate(0px, 0px);
    }
    to {
      opacity: 1;
      transform: translate(0px, 25px);
    }
  }
`;

const Respect = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <ButtonWrapper onClick={(e) => setOpen(!open)}>
        <H1>Respect</H1>
        {open ? (
          <>
            {" "}
            <Img src="./img/collapse-open.svg" alt="open" />
          </>
        ) : (
          <>
            <Img src="./img/collapse-close.svg" alt="close" />
          </>
        )}
      </ButtonWrapper>
      {open && (
        <Content>
          <P>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </P>
        </Content>
      )}
    </Container>
  );
};

export default Respect;
