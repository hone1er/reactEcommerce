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
        <p>{category}</p>
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
    color: ${props => props.theme.secondary};
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
  background: ${props => props.theme.secondary};
  width: 300px;
  p {
    scale: 1;
  }
  a {
    padding: 1.3rem 0;
    color: ${props => props.theme.main} !important;
    width: 100%;
    &:hover {
  background: ${props => props.theme.secondary };
  box-shadow: 0 0 20px -10px;
    }
    &:hover > p {
      scale: 1.2
    }
  }
  &:hover {
    display: flex;
  }
  &::before {
    content: " ";
    width: 15px;
    height: 15px;
    background: ${props => props.theme.secondary};
    color: ${props => props.theme.main};
    position: relative;
    top: -5px;
    border-radius: 2px;
    transform: rotate(45deg);
    z-index: -1;
  }
`;
