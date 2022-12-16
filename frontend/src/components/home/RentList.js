import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 45px;
  margin-bottom: 70px;

  .link {
    text-decoration: none;
  }
`;

const Card = styled.div`
  border-radius: 10px;
  width: 100%;
  max-width: 340px;
  filter: brightness(75%);
  &:hover {
    cursor: pointer;
    animation: rentAnimCard forwards 250ms;
  }
  @keyframes rentAnimCard {
    from {
      scale: 1;
      filter: brightness(80%);
    }
    to {
      scale: 1.1;
      filter: brightness(100%);
    }
  }
`;

const Img = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 340px;
  object-fit: cover;
`;

const Title = styled.div`
  width: 245px;
`;

const H2 = styled.h2`
  color: white;
  margin-top: -50px;
  padding-left: 10px;
  font-size: 1.1rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const RentList = ({ rents }) => {
  console.log(rents);
  return (
    <div>
      <Container>
        <NavLink to={`logement/${rents.id}`} className="link" state={rents}>
          <Card>
            <Img id="img" src={rents.cover} alt="cover" />
            <Title>
              <H2 id="title">{rents.title}</H2>
            </Title>
          </Card>
        </NavLink>
      </Container>
    </div>
  );
};

export default RentList;
