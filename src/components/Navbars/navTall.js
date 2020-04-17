import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Dropdown from "./dropDown";
import { TiShoppingCart } from "react-icons/ti";

export default class Nav extends React.Component {
  state = {
    toggle: false,
  };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <>
        <StyledNav
          as="nav"
          fixed={this.props.fixed}
          sticky={this.props.sticky}
          position={this.props.position}
        >
          <Container>
            <TopNav>
              <StyledLink to="/">LOGO</StyledLink>
              <StyledUl as="ul">
                <li>
                  <StyledLink onClick={this.Toggle} to="/cart">
                    <TiShoppingCart />
                  </StyledLink>
                </li>
                <li>
                  <StyledLink onClick={this.Toggle} to="#">
                    sign-in
                  </StyledLink>
                </li>
                <li>
                  <StyledLink
                    className="get-started"
                    onClick={this.Toggle}
                    to="#"
                  >
                    get started
                  </StyledLink>
                </li>
              </StyledUl>
            </TopNav>
          </Container>

          <Container id="bottom">
            <BottomNav>
              <LowerUl as="ul">
                <li>
                  <StyledLink onClick={this.Toggle} to="/products/tshirts">
                    t-shirts
                  </StyledLink>
                </li>
                <li>
                  <StyledLink onClick={this.Toggle} to="/products/pants">
                    pants
                  </StyledLink>
                </li>
                <li>
                  <StyledLink onClick={this.Toggle} to="/products/sweatshirt">
                    sweatshirts/hoodies
                  </StyledLink>
                </li>
                <li>
                  <StyledLink onClick={this.Toggle} to="#">
                    <Dropdown
                      main={["more...", "more href"]}
                      links={[
                        ["link1", "link href"],
                        ["link2", "link2 href"],
                        ["link3", "link3 href"],
                      ]}
                    />
                  </StyledLink>
                </li>
              </LowerUl>
            </BottomNav>
          </Container>
        </StyledNav>
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

const StyledNav = styled.div`
      width: 100%;
      height 120px;
      margin: 0;
      padding: 0;
      background: ${(props) => props.theme.main || theme.main};
      background: ${(props) => props.theme.main || theme.main};
      position: ${(props) =>
        props.fixed ? "fixed" : props.sticky ? "sticky" : props.position};
      top: 0;
      z-index: 1;

      @media (max-width: 768px) {
        display: none;
      }
  `;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.secondary || theme.secondary};
  &.get-started {
    display: flex;
    align-items: center;
    border: 1px solid ${(props) => props.theme.secondary || theme.secondary};
    padding: 10px;
    border-radius: 8px;
    text-transform: capitalize;
  }
  svg {
    width: 32px;
    height: 32px;
    align-self: center;
    position: relative;
    top: 5px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  border-bottom: 1px solid
    ${(props) => props.theme.secondary || theme.secondary};
  &#bottom {
    border-bottom: none;
  }
`;

const TopNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1325px;
  height: 40px;
  margin: auto;
  padding: 10px 35px;
`;

const StyledUl = styled.div`
  display: flex;
  list-style: none;
  align-items: center;
  width: 250px;
  justify-content: inherit;
`;

const LowerUl = styled(StyledUl)`
  max-width: 1325px;
  width: 100%;
  justify-content: space-evenly;
  margin: auto;
`;

const BottomNav = styled(TopNav)`
  max-width: 1325px;
  align-items: center;
`;
