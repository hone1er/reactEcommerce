import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Usage
//
// <Dropdown main={["menu", "menu href"]} links={[["Link1", "link1 href"], ["Link2", "link2 href"]]} />

export default function Dropdown(props) {
  return (
    <DropdownContainer>
      <Link to={props.main[1]}>{props.main[0]}</Link>
      <DropdownDiv className="dropdown">
        {props.links.map(item => {
          return <Link to={item[1]}>{item[0]}</Link>;
        })}
      </DropdownDiv>
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  display: flex;
  justify-content: center;
  a {
    text-decoration: none !important;
    color: white;
    padding: 9px 0;
  }
  &:hover > .dropdown {
    display: flex;
  }
`;
const DropdownDiv = styled.div`
  position: absolute;
  margin-top: 42px;
  display: none;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: black;
  width: 95px;

  a {
    margin: 15px;
    color: white !important;
    &:hover {
      color: #33b1ff !important;
    }
  }
  &:hover {
    display: flex;
  }
  &::before {
    content: " ";
    width: 15px;
    height: 15px;
    background: black;
    color: white;
    position: relative;
    top: -5px;
    border-radius: 2px;
    transform: rotate(45deg);
  }
`;
