import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  max-width: 1020px;
  margin: auto;
  padding: 2.5em;
  &#detail-page {
    flex-direction: column;
    .cardInfo{
    h2{
      margin: 0;
    }
    p {
      margin-top: .3rem;
    }
  }
    @media (max-width: 768px) {
      padding: 0;
      flex-direction: column-reverse;
    }
  }
  &.cart {
    flex-direction: column;
    align-self: flex-end;
    background: #f3f3f3;
    margin: 2.1% !important;
    padding: 10px 35px 35px !important;
    font-size: 0.6em;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      margin: 140px 13px 30px 30px !important;
    }

    @media (max-width: 335px) {
      margin: 140px 0 0 0 !important;
    }
  }

  .cart-item {
    display: flex;
    flex-direction: row;
    width: 95% !important;
    justify-content: center;
    align-items: center;

    img {
      max-width: 200px;
      @media (max-width: 768px) {
        width: 30vw;
      }
    }
  }

  &.cart-detail {
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    align-items: center;
    justify-content: center;

    div {
      margin: 0;
      padding: 5px;
      width: fit-content;
    }
  }

  &.detail {
    margin-top: 40px;
    align-items: center;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      margin-top: 85px;
    }
  }
`;

export default StyledDiv;
