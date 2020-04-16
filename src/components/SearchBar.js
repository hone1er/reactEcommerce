import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";


export default function SearchBar() {
  return (
    <StyledForm>
      <input placeholder="Search" />
      <button>
        <FiSearch />
      </button>
    </StyledForm>
  );
}

const StyledForm = styled.div`
  display: flex;
  align-items: center;
  input {
    height: 26px;
    border-radius: 3px 0 0 3px;
    box-shadow: none;
    border: black 1px solid;
    border-right: none;
    background-color: #f5f5f5;
    padding: 5px;
  }
  button {
    height: 36.75px;
    position: relative;
    border-radius: 0 3px 3px 0;
    box-shadow: none;
    border: #f5f5f5 1px solid;
    border-left: none;
    background-color: white;
    cursor: pointer;

    svg {
      color: #0077da;
      width: 20px;
      height: 20px;
    }
  }
`;
