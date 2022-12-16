import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Ul = styled.ul`
  display: flex;
  gap: 40px;
`;

const Li = styled.li`
  list-style: none;
  font-size: 1.6rem;

  &:hover {
    animation: liAnim forwards 150ms;
  }

  @keyframes liAnim {
    from {
      scale: 1;
    }
    to {
      scale: 1.1;
    }
  }
`;

const Header = () => {
  return (
    <header>
      <Nav>
        <div>
          <div>
            <NavLink to={"/"}>
              <img src="./img/logo/logo.svg" alt="logo" />
            </NavLink>
          </div>
        </div>
        <Ul>
          <Li>
            <NavLink
              to={"/"}
              style={({ isActive }) => ({
                color: "#FF6060",
                textDecorationLine: isActive ? "underline" : "none",
              })}
            >
              Accueil
            </NavLink>
          </Li>
          <Li></Li>
          <Li>
            <NavLink
              to={"/about"}
              style={({ isActive }) => ({
                color: "#FF6060",
                textDecorationLine: isActive ? "underline" : "none",
              })}
            >
              À propos
            </NavLink>
          </Li>
        </Ul>
      </Nav>
    </header>
  );
};

export default Header;
