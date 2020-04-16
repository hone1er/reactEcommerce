import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
//  REPLACE WITH YOUR OWN IMAGE
import image from "./testImage.jpg";
import { ItemContext } from "../Cards/ItemContext";
//

//  Theme Variables
const theme = {
  // text theme
  main: "black",
  secondary: "black",
  //  button theme
  fg: "black",
  bg: "white",
  backgroundImage: image,
};

//  props for this component:

//         title: string displayed as h1(no default),

//         subtitle: string displayed as h4(no default),

//         href: default = #

//         displayButton: default=false, set displayButton=true to show button

//         buttonName: string displayed in button Element(default="Shop")

const Hero = (props) => {
  const { detail, items, handleDetail } = useContext(ItemContext);

  //  returns the details of a random item
  const feelingLucky = () => {
    const randomItem = randomizer(items);
    handleDetail(randomItem.id);
    return detail;
  };

  //  select a random item for the 'feeling lucky' button
  const randomizer = (items) => {
    const oldItemIndex = items.indexOf(detail);
      const randInt = () => {
        return Math.floor(Math.random() * items.length);
      };
      let selector = randInt();
      while (selector === oldItemIndex) {
        selector = randInt();
      }
      return items[selector];
  };

  return (
    <OuterHero>
      <ThemeProvider theme={props.theme || theme}>
        <Container alignment={props.alignment || "center"} image={props.image}>
          <h1>{props.title}</h1>
          <h4>{props.subtitle}</h4>
          <Link
            to="/details"
            className={
              props.displayButton === "true" ? "header-button" : "display-none"
            }
            onClick={feelingLucky}
          >
            {props.buttonName || "Shop"}
          </Link>
        </Container>
      </ThemeProvider>
    </OuterHero>
  );
};

export default Hero;
const OuterHero = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  margin: 50px 0 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1060px;
  margin: 0 auto;
  height: ${(props) => props.height || "70vh"};
  min-height: 300px;
  background: no-repeat;
  justify-content: ${(props) => props.alignment};
  align-items: ${(props) => props.alignment};
  background-image: url(${(props) => props.image || theme.backgroundImage});
  padding: 0 50px;
  position: relative;
  overflow: hidden;
  background-position: top;
  background-size: cover;
  .display-none {
    display: none;
  }

  h1 {
    font-size: 2.5rem;
    color: ${(props) => props.theme.main || theme.main};
    margin-bottom: 0;
  }

  h4 {
    font-size: 0.9rem;
    margin-top: 0;
  }
  color: ${(props) => props.theme.secondary || theme.secondary};

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    line-height: 1.5;
    color: ${(props) => props.theme.fg || theme.fg};
    background: ${(props) => props.theme.bg || theme.bg};
    width: 100%;
    max-width: 100px;
    min-width: 100px;
    height: 45px;
    border-radius: 25px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;
  }

  @media (max-width: 1236px) {
    width: 765px;
  }

 

  @media (max-width: 646px) {
    width: 100%;

    h4 {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 435px) {
    width: 100%;
    h1 {
      text-align: left;
      font-size: 2.2rem;
    }
    h4 {
      font-size: 0.6rem;
      text-align: left;
    }
    div {
      top: 25px;
      position: relative;
    }
  }
`;
