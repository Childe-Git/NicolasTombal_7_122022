import React, { useState } from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: 515px;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 25px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -300px;
  margin-bottom: 225px;
  padding-left: 15px;
  padding-right: 15px;

  button {
    border: none;
    background: none;
    &:hover {
      cursor: pointer;
      animation: buttonAnim forwards 250ms;
    }
  }

  @keyframes buttonAnim {
    from {
      scale: 1;
    }
    to {
      scale: 1.1;
    }
  }
`;

const Index = styled.div`
  text-align: center;
  font-weight: bold;
`;

const RentGallery = ({ rents }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log();

  const previousSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? rents.pictures.length - 1 : currentIndex - 1
    );
    console.log(currentIndex);
  };

  const nextSlide = () => {
    setCurrentIndex(
      // Si l'index arrive à picture.length - 1 donc qu'il est le même nombre
      // Alors reviens à 0 sinon index + 1 à chaque clique
      currentIndex === rents.pictures.length - 1 ? 0 : currentIndex + 1
    );
    console.log(currentIndex);
  };

  console.log(currentIndex);
  console.log(rents.pictures.length - 1);
  console.log(rents.pictures);
  return (
    <>
      <Img src={rents.pictures[currentIndex]} alt="rent-pict" />
      <ButtonContainer>
        <button onClick={previousSlide}>
          <img src="./img/left-arrow.svg" alt="arrow" />
        </button>
        <button onClick={nextSlide}>
          <img src="./img/right-arrow.svg" alt="arrow" />
        </button>
      </ButtonContainer>
      <Index>
        {/* Affiche l'index de rents.picture, + 1 car l'index commence à 0 */}
        {currentIndex + 1} / {rents.pictures.length}
      </Index>
    </>
  );
};

export default RentGallery;
