import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ItemContext } from "../Cards/ItemContext";

// Usage

// <Dropdown main={["menu name", "menu href"]}  />
export default function Dropdown(props) {
  const { categories, handleToggle } = useContext(ItemContext);
  const moreList = categories.slice(3).map((category) => {
    const url = `/products/${category}`;
    return (
      <Link key={url} onClick={handleToggle} to={url}>
        {category}
      </Link>
    );
  });
  return moreList.length ? (
    <DropdownContainer>
      <Link to={props.main[1]}>{props.main[0]}</Link>
      <DropdownDiv className="dropdown">{moreList}</DropdownDiv>
    </DropdownContainer>
  ) : null;
}

const DropdownContainer = styled.div`
  display: flex;
  justify-content: center;
  text-transform: capitalize;
  font-size: 1.25rem;

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
  width: fit-content;

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
