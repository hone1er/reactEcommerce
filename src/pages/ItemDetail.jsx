import React, { useContext } from "react";
// import {detailItems} from "../components/Cards/Items";
import { ItemContext } from "../components/Cards/ItemContext";
import { ButtonContainer } from "../components/button";
import StyledDiv from "../components/StyledDiv";
import StyledCard from "../components/StyledCard";
import Description from "../components/Description";

const ItemDetail = () => {
  const { addItem, detail } = useContext(ItemContext);
  const buttonText = detail.inCart ? "in cart" : "add to cart";

  return (
    <>
      <StyledDiv className="detail">
        <StyledCard id="card-detail" className="cardBox" type="button">
            <img className="detail-img" src={detail.img} alt="Avatar" />
        </StyledCard>
        <Description id="detail-page">
          <div className="cardInfo">
            <h2>
              {detail.header}
            </h2>
            <p>{detail.subtitle}</p>
          <p>{detail.description}</p>
          <p className="sub">${detail.price}</p>
          <ButtonContainer
            inCart={detail.inCart}
            disabled={detail.inCart}
            onClick={() => {
              addItem(detail.id);
            }}
          >
            { buttonText }
          </ButtonContainer>
          </div>
        </Description>
      </StyledDiv>
    </>
  );
};



export default ItemDetail;
