import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logOut } from "../redux/authSlice";
import { RootState, useAppSelector } from "../redux/store";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  border-right: 1px solid #bbb;

  & > .link {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  &:first-child {
    border-left: 1px solid #bbb;
  }
  &:hover {
    background-color: #111;
  }
  & .logout {
    float: right;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    cursor: pointer;
  }
`;

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = (e: React.MouseEvent) => {
    dispatch(logOut());
    navigate("/login");
  };

  const renderPublickNavBar = () => {
    return (
      <>
        <StyledUl>
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

  const renderPrivateNavBar = () => {
    return (
      <>
        <StyledUl>
          <StyledLi>
            <Link to="/recipes" className="link">
              Recipes
            </Link>
          </StyledLi>
          <StyledLi>
            <Link to="/create_recipe" className="link">
              Create recipe
            </Link>
          </StyledLi>
          <StyledLi>
            <div
              className="logout"
              onClick={(e) => {
                logoutHandler(e);
              }}
            >
              Logout
            </div>
          </StyledLi>
        </StyledUl>
      </>
    );
  };
  const userKey = useAppSelector((state) => {
    return state.auth.user.details.userKey;
  });
  return <>{userKey ? renderPrivateNavBar() : renderPublickNavBar()}</>;
};

export default NavBar;
