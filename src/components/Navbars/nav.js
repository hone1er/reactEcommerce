import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { ItemContext } from "../Cards/ItemContext";
import Dropdown from "./dropDown";

export default function NavMobile(props) {
  const [toggle, setToggle] = useState(false);
  const { categories } = useContext(ItemContext);

  const categoryList = categories.slice(0, 3).map((category) => {
    const url = `/products/${category}`;
    return (
      <Li key={category} onClick={handleToggle} to={url}>
        {category}
      </Li>
    );
  });

  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <>
      <div>
        <NavOuter as="nav" className={toggle ? "nav-bar show-bar" : "nav-bar"}>
          <LogoDiv>
            <Li
              onClick={
                toggle
                  ? handleToggle
                  : () => {
                      return null;
                    }
              }
              className="no-hover"
              id="logo-link"
              to="/"
            >
              <h1>Benal</h1>
            </Li>
            <MenuDiv>
              <Li
                className="no-hover shopping-cart"
                to="/cart"
                onClick={
                  toggle
                    ? handleToggle
                    : () => {
                        return null;
                      }
                }
              >
                <TiShoppingCart className="shopping-cart" />
              </Li>

              <Button
                onClick={handleToggle}
                id="mainmenulabel"
                aria-haspopup="true"
                aria-owns="mainnavmenu"
                className="navigation-bar-slideout__menu-toggle js-navigation-bar-slideout__menu-toggle"
              >
                <span
                  className="navigation-bar__menu-toggle-icon"
                  aria-hidden="true"
                >
                  <svg
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="navigation-bar__menu-toggle-svg"
                      d="M1.335 12H22V9H.015v3h1.32zm0-9H22V0H.015v3h1.32zm0 18H22v-3H.015v3h1.32z"
                      fillRule="evenodd"
                    ></path>
                    <g
                      className="navigation-bar__menu-toggle-svg-close"
                      fillRule="evenodd"
                    ></g>
                  </svg>
                </span>
              </Button>
            </MenuDiv>
          </LogoDiv>
        </NavOuter>
          <NavList className={toggle ? "nav-links show-nav" : "nav-links"}>
            <Button className="mobile-nav-x"onClick={handleToggle}>X</Button>
            <Li onClick={handleToggle} to="/">
              Home
            </Li>
            {categoryList}
            <Dropdown main={["more...", "menuHref"]} />
          </NavList>
      </div>
    </>
  );
}

const NavOuter = styled.div`
  display: none;
  background-color: ${props => props.theme.main};
  width: ${(props) => (props.className === "nav-bar" ? "max-content" : "100%")};
  min-width: max-content;
  top: 0;
  height: auto;
  border-radius: 0;
  position: fixed;
  z-index: 1;

  @media (max-width: 768px) {
    display: inline-block;
    width: 100%;
    text-align: right;
    text-align: -webkit-right;
  }

  img {
    max-width: 90px;
    scale: 1;
    &:hover{
      scale: 1.2;
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  alignt-items: center;
  list-style: none;
  padding: 0 0 2rem;
  transition: transform 200ms;
  background: ${props => props.theme.main};
  color: ${props => props.theme.secondary};
  transform: ${(props) => (props.className === "nav-links show-nav" ? "translate(0, 0)" : "translate(250vw, 0)")};
position: absolute;
top: 0;
z-index: 1000;
width: 100%;

a{
  scale: 1;
  &:hover {
    scale: 1.2;
  }
}


.mobile-nav-x {
  align-self: flex-end;
  color: ${props => props.theme.secondary};
  scale: 2;
  margin-bottom: 2rem;

  &:hover {
    scale: 2.2
  }
}
`;

const LogoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0x 10px;
  color: ${props => props.theme.secondary};
`;
const Button = styled.button`
  display: flex;
  width: 55px;
  justify-content: space-around;
  padding: 10px;
  border-radius: 0;
  background: ${props => props.theme.main};
  border: none;
  height: fit-content;
  align-self: center;
  align-items: center;
  cursor: pointer;
  svg {
    fill: ${props => props.theme.secondary};
    background: ${props => props.theme.main};
  }
`;

const Li = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0;
  font-size: 1.5em;
  text-decoration: none;
  text-transform: capitalize;
  color: ${props => props.theme.secondary};
  // &:hover {
  //   background: ${props => props.theme.secondary};
  //   color: ${props => props.theme.main};
  // }

  &#logo-link {
    h1 {
      margin: 0 10px;
    }
  }
  &.no-hover:hover {
    background: ${props => props.theme.main};
    color: ${props => props.theme.secondary};
  }

  &.shopping-cart {
    position: relative;
    right: 2rem;
  }
  .shopping-cart {
    scale: 1.4;
  }
`;

const MenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    padding: 10px;
    margin: 0;
  }
`;
