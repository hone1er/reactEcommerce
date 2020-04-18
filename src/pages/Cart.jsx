import React, { useContext } from "react";
import { ItemContext } from "../components/Cards/ItemContext";
import { ButtonContainer } from "../components/button";
import StyledDiv from "../components/StyledDiv";
import StyledCard from "../components/StyledCard";
import Description from "../components/Description";
import { Link } from "react-router-dom";
function Cart() {
  const { addItem, removeItem, handleDetail, items, cart } = useContext(ItemContext);

  return (
    <>
      <StyledDiv className="cart-detail">
        <StyledDiv className="cart">
          <h1 className="subtotal">
            Subtotal({cart.qty}) : ${cart.total}
          </h1>
          <Link to="checkout">
            <ButtonContainer className="checkout-button">
              proceed to checkout
            </ButtonContainer>
          </Link>
        </StyledDiv>
        {items.map((detail) => {
          return detail.qty > 0 ? (
            <StyledCard id="card-detail" className="cart-item" type="button">
              <div className="inner-div">
                <Link
                  id={detail.id}
                  to={{
                    pathname: "/details",
                    myCustomProps: detail,
                  }}
                  onClick={() => handleDetail(detail.id)}
                >
                  <img src={detail.img} alt="Avatar" />
                </Link>
                <div className="cardInfo cartCardInfo">
                  <h2>
                    <b>{detail.header}</b>
                  </h2>
                  <p className="sub">${detail.price} ea.</p>
                  <p>qty: {detail.qty}</p>
                </div>
              </div>
              <Description className="cart-description">
                <StyledDiv className="add-sub-container">
                  <ButtonContainer
                    className="add-sub-item"
                    inCart={detail.inCart}
                    onClick={() => {
                      addItem(detail.id);
                    }}
                  >
                    +
                  </ButtonContainer>
                  <ButtonContainer
                    className="add-sub-item"
                    inCart={detail.inCart}
                    onClick={() => {
                      removeItem(detail.id);
                    }}
                  >
                    -
                  </ButtonContainer>
                </StyledDiv>
              </Description>
            </StyledCard>
          ) : null;
        })}
      </StyledDiv>
    </>
  );
}

export default Cart;
