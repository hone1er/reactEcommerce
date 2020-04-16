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
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 646px) {
    padding: 5px 0;
    width: 100%;
  }
`;
