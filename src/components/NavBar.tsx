import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
`;

const StyledLi = styled.li`
  display: inline;
  float: left;
  border-right: 1px solid #bbb;
  & > .link {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  &:hover {
    background-color: #111;
  }
`;

const NavBar = () => {
  return (
    <>
      <StyledUl>
        <StyledLi>
          <Link to="/recipes" className="link">
            Recipes
          </Link>
        </StyledLi>
        <StyledLi>
          <Link to="/login" className="link">
            Login
          </Link>
        </StyledLi>
        <StyledLi>
          <Link to="/register" className="link">
            Register
          </Link>
        </StyledLi>
      </StyledUl>
    </>
  );
};

export default NavBar;
