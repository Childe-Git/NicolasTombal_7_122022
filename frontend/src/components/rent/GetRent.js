import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Rating from "./Rating";
import RentDescription from "./RentDescription";
import RentEquipment from "./RentEquipment";
import RentGallery from "./RentGallery";

const Container = styled.div`
  color: #ff6060;
  margin-top: 20px;

  .collapse-container {
    margin-top: 40px;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 1024px) {
      margin-bottom: 20px;
      flex-direction: column;
      gap: 20px;
      align-items: center;
    }
    div {
      max-width: 620px;
      width: 100%;
      margin-bottom: 20px;
      @media screen and (max-width: 1290px) {
        max-width: 500px;
      }
    }
  }
`;

const Information = styled.div`
  text-align: left;

  .flex {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
  }
  h1 {
    margin-bottom: 0;
    @media screen and (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  .user-info {
    display: flex;
    gap: 10px;

    p {
      width: min-content;
      font-weight: bold;
    }
    img {
      width: 68px;
      height: 68px;
      border-radius: 50%;
    }
  }

  .location {
    font-weight: bold;
    margin-top: 5px;
  }
`;

const UlContainer = styled.div`
  display: flex;
  margin-left: -40px;
  flex-wrap: wrap;
  ul {
    list-style-type: none;

    li {
      text-align: center;
      color: white;
      background-color: #ff6060;
      padding: 5px;
      border-radius: 12px;
      width: 100%;
      min-width: 130px;
    }
  }
`;

const GetRent = () => {
  const location = useLocation();
  const rents = location.state;

  const { id } = useParams();

  console.log(rents);
  return (
    <Container>
      <div>
        <RentGallery rents={rents} />
      </div>
      <Information>
        <div className="flex">
          <h1>{rents.title}</h1>
          <div className="user-info">
            <p>{rents.host.name}</p>
            <img src={rents.host.picture} alt="" />
          </div>
        </div>
        <p className="location">{rents.location}</p>
        <div className="flex">
          <UlContainer>
            {rents.tags.map((tag) => {
              return (
                <ul key={tag}>
                  <li>{tag}</li>
                </ul>
              );
            })}
          </UlContainer>
          <Rating rating={rents.rating} />
        </div>
      </Information>
      <div className="collapse-container">
        <div>
          <RentDescription rents={rents} />
        </div>
        <div>
          <RentEquipment rents={rents} />
        </div>
      </div>
    </Container>
  );
};

export default GetRent;
