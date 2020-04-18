import React from "react";
import Card from "./Card";
import styled from "styled-components";

export default function ItemList(props) {

  return (
    <>
      <Wrapper>
        {props.items.map(item => (
          <Card
            key={item.id}
            id={item.id}
            target={item.target}
            img={item.img}
            header={item.header}
            subtitle={item.subtitle}
            price={item.price}
            inCart={item.inCart}
            disabled={item.inCart}
            addItem={() => props.addItem(item.id)}
            handleDetail={() => {
              props.handleDetail(item.id);
            }}
          ></Card>
        ))}
      </Wrapper>
    </>
  );
}

//  Outer-most wrapper component (Holds all cards within it)
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  padding: 50px 20px;
  justify-content: center;
  max-width: 885px;
  margin: 0 auto;
  &::after {
    content: "";
    flex: auto;
  }
@media (min-width: 1237px) {
  max-width: 1180px;
  }

  @media (max-width: 942px) {
    max-width: 590px;
  }

  @media (max-width: 646px) {
    padding: 5px 0;
    max-width: 560px;
    width: 100%;
  }

  @media (max-width: 578px) {
    max-width: 480px;
    img {
      max-height: 345px;
    }
  }

  @media (max-width: 480px) {
    padding: 0 0 0 .75vw;
  }

  @media (max-width: 460px) {
    padding: 0;


    img{
      height: auto;
      max-height: unset;
    }
    .cardBox {
      margin: auto;
      max-width: 99%;
      width: 99%;
      margin-bottom: 45px;
    }
  }
  
`;

