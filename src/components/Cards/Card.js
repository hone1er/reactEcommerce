import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../button";
import StyledCard from "../StyledCard";

export default function Card(props) {
  const buttonText = props.inCart ? "in cart" : "add to cart";
  return (
    <>
      <StyledDiv>
        <StyledCard className="cardBox" type="button">
          <Link
            id={props.id}
            to={{
              pathname: "/details",
              myCustomProps: props,
            }}
            onClick={() => props.handleDetail(props.id)}
          >
            <img src={props.img} alt="Avatar" />
            <div className="cardInfo">
              <h2>
                {props.header}
              </h2>
              <p>{props.subtitle}</p>
              <p className="sub">${props.price}</p>
            </div>
          </Link>
          <ButtonContainer
            disabled={props.inCart}
            inCart={props.inCart}
            as="button"
            onClick={() => {
              props.addItem(props.id);
            }}
          >
            {buttonText}
          </ButtonContainer>
        </StyledCard>

        <p>{props.description}</p>
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0;
  padding: 0px;

  &.detail {
    margin-top: 50px;
  }
`;
