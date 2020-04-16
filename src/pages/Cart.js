import React, { useState, useContext, useEffect } from "react";
import { ItemContext } from "../components/Cards/ItemContext";
import { ButtonContainer } from "../components/button";
import StyledDiv from "../components/StyledDiv";
import StyledCard from "../components/StyledCard";
import Description from "../components/Description";

function Cart() {
  const { addItem, removeItem, items } = useContext(ItemContext);
  const [cart, setCart] = useState({ total: 0, qty: 0 });



  useEffect(() => {
    function totalQuantity() {
      return items.filter((el) => {
        return el.qty > 0;
      }).length === 0
        ? "0 items"
        : getQuantity(items) === 1
        ? `${getQuantity(items)} items`
        : `${getQuantity(items)} item`;
    }

    function getQuantity() {
      return items
        .filter((el) => {
          return el.qty > 0;
        })
        .map((item) => {
          return item.qty;
        })
        .reduce((acc, val) => {
          return (acc += val);
        });
      }
    const total =
    items.filter((item) => {
        return item.qty > 0;
      }).length > 0
        ? items
        .filter((item) => {
              return item.qty > 0;
            })
            .map((item) => {
              return item.price * item.qty;
            })
            .reduce((acc, val) => {
              return (acc += val);
            })
            .toFixed(2)
        : 0;
    setCart({ total: total, qty: totalQuantity() });
  }, [items]);

  return (
    <>
      <StyledDiv className="cart-detail">
        <StyledDiv className="cart">
          <h1 className="subtotal">
            Subtotal({cart.qty}) : ${cart.total}
          </h1>
          <ButtonContainer className="checkout-button">
            proceed to checkout
          </ButtonContainer>
        </StyledDiv>
        {items.map((detail) => {
          return detail.qty > 0 ? (
            <StyledCard id="card-detail" className="cart-item" type="button">
              <div className="inner-div">
                <img src={detail.img} alt="Avatar" />
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
