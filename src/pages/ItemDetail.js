import React, { useContext } from "react";
// import {detailItems} from "../components/Cards/Items";
import { ItemContext } from "../components/Cards/ItemContext";
import { ButtonContainer } from "../components/button";
import StyledDiv from "../components/StyledDiv";
import StyledCard from "../components/StyledCard";
import Description from "../components/Description";

const ItemDetail = () => {
  // eslint-disable-next-line
  const { addItem, detail, cart } = useContext(ItemContext);
  return (
    <>
      <StyledDiv className="detail">
        <StyledCard id="card-detail" className="cardBox" type="button">
            <img className="detail-img" src={detail.img} alt="Avatar" />
        </StyledCard>
        <Description id="detail-page">
          <div className="cardInfo">
            <h2>
              <b>{detail.header}</b>
            </h2>
            <p>{detail.subtitle}</p>
            <p className="sub">${detail.price}</p>
          </div>
          <p>{detail.description}</p>
          <ButtonContainer
            inCart={detail.inCart}
            disabled={detail.inCart}
            onClick={() => {
              addItem(detail.id);
            }}
          >
            add to cart
          </ButtonContainer>
        </Description>
      </StyledDiv>
    </>
  );
};



export default ItemDetail;
