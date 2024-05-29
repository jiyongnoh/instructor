import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  height: 40px;
`;

const Nav = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <NavLink to="/">
            <Logo src="/logo.png" alt="로고" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/company">회사소개</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/instructors">강사소개</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/reservations">강의예약</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/programs">교육 프로그램</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/board">게시판</NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Nav;
