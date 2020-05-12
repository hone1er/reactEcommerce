import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Dropdown from "./dropDown";
import { TiShoppingCart } from "react-icons/ti";
import { ItemContext } from "../Cards/ItemContext";
export default function Nav(props) {
  const [toggle, setToggle] = useState({ toggle: false });
  const { categories } = useContext(ItemContext);

  function handleToggle() {
    setToggle({ toggle: !toggle });
  }

  const categoryList = categories.slice(0, 3).map((category) => {
    const url = `/products/${category}`;
    return (
      <li key={category}>
        <StyledLink onClick={handleToggle} to={url}>
          {category}
        </StyledLink>
      </li>
    );
  });

  return (
    <>
      <StyledNav
        as="nav"
        fixed={props.fixed}
        sticky={props.sticky}
        position={props.position}
      >
        <Container>
          <TopNav>
  <StyledLink to="/"><h1>Benal</h1></StyledLink>
            <StyledUl as="ul">
              <li>
                <StyledLink onClick={handleToggle} to="/cart">
                  <TiShoppingCart />
                </StyledLink>
              </li>
              <li>
                <StyledLink onClick={handleToggle} to="#">
                  sign-in
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  className="get-started"
                  onClick={handleToggle}
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
              {categoryList}
              <li>
                <StyledLink onClick={handleToggle} as="div">
                  <Dropdown main={["more...", "more href"]} />
                </StyledLink>
              </li>
            </LowerUl>
          </BottomNav>
        </Container>
      </StyledNav>
    </>
  );
}



const StyledNav = styled.div`
      width: 100%;
      height 120px;
      margin: 0;
      padding: 0;
      background: ${(props) => props.theme.main};
      background: ${(props) => props.theme.main};
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
  color: ${(props) => props.theme.secondary};
  &.get-started {
    display: flex;
    align-items: center;
    border: 1px solid ${(props) => props.theme.secondary};
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
    ${(props) => props.theme.secondary};
  &#bottom {
    border-bottom: none;
  }

  img {
    max-width: 90px;
    height; 90px;
    scale: 1;

    &:hover {
      scale: 1.2;
    }
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

  li {
    scale: 1;
    &:hover {
      scale: 1.1;
    }
  }
`;

const BottomNav = styled(TopNav)`
  max-width: 1325px;
  align-items: center;
  text-transform: capitalize;
  font-size: 1.25rem;
`;
