import React from "react";
import Banner from "../components/home/Banner";
import RentList from "../components/home/RentList";
import { logement } from "../data/logement";
import styled from "styled-components";

const HomeBackground = styled.div`
  background-image: linear-gradient(#ffffff00 -5%, #00000080 80%);
  border-radius: 25px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

const Home = () => {
  return (
    <main>
      <Banner />
      <section>
        <HomeBackground>
          {logement[0] &&
            logement.map((rent) => {
              return <RentList rents={rent} key={rent.id} />;
            })}
        </HomeBackground>
      </section>
    </main>
  );
};

export default Home;
