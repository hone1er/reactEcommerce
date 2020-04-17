import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
export default class NavMobile extends React.Component {
  state = {
    toggle: false,
  };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <>
        <div>
          <NavOuter
            as="nav"
            className={this.state.toggle ? "nav-bar show-bar" : "nav-bar"}
          >
            <LogoDiv>
              <Li
                onClick={
                  this.state.toggle
                    ? this.Toggle
                    : () => {
                        return null;
                      }
                }
                className="no-hover"
                id="logo-link"
                to="/"
              >
                <h1>logo</h1>
              </Li>
              <MenuDiv>
                <Li
                  className="no-hover"
                  to="/cart"
                  onClick={
                    this.state.toggle
                      ? this.Toggle
                      : () => {
                          return null;
                        }
                  }
                >
                  <TiShoppingCart />
                </Li>

                <Button
                  onClick={this.Toggle}
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
            <NavList
              className={this.state.toggle ? "nav-links show-nav" : "nav-links"}
            >
              <Li onClick={this.Toggle} to="/">
                Home
              </Li>
              <Li onClick={this.Toggle} to="/products/tshirts">
                t-shirts
              </Li>
              <Li onClick={this.Toggle} to="/products/pants">
                pants
              </Li>
              <Li onClick={this.Toggle} to="/products/sweatshirt">
                sweatshirts/hoodies
              </Li>
            </NavList>
          </NavOuter>
        </div>
      </>
    );
  }
}

//  Theme Variables
const theme = {
  main: "#444",
  secondary: "#f8f8f8",
  borderRadius: "0",
};

const NavOuter = styled.div`
  display: none;
  background-color: ${theme.main};
  width: ${(props) => (props.className === "nav-bar" ? "max-content" : "100%")};
  min-width: max-content;
  top: 0;
  height: ${(props) =>
    props.className === "nav-bar" ? "max-content" : "auto"};
  border-radius: 0;
  position: sticky;
  z-index: 1;

  @media (max-width: 768px) {
    display: inline-block;
    width: 100%;
    text-align: right;
    text-align: -webkit-right;
  }
`;

const NavList = styled.ul`
  display: ${(props) => (props.className === "nav-links" ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  alignt-items: center;
  list-style: none;
  padding: 0;
`;

const LogoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 25px;
  color: ${theme.secondary};
`;
const Button = styled.button`
  display: flex;
  width: 75px;
  justify-content: space-around;
  padding: 10px;
  border-radius: 0;
  background: #444;
  border: none;
  height: fit-content;
  align-self: center;
  align-items: center;

  svg {
    fill: white;
  }
`;

const Li = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0;
  font-size: 1.5em;
  text-decoration: none;
  color: ${theme.secondary};
  &:hover {
    background: ${theme.secondary};
    color: ${theme.main};
  }

  &#logo-link {
    h1 {
      margin: 0;
    }
  }
  &.no-hover:hover {
    background: ${theme.main};
    color: ${theme.secondary};
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
