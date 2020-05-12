import styled from "styled-components";

// Individual Card component
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 275px;
  min-width: 275px;
  margin: 10px;

  border-radius: ${props => props.theme.borderRadius};

  a {
    text-decoration: none;
    color: black;
  }

  img {
    display: flex;
    justify-self: center;
    align-self: center;
    max-width: 100%;
    height: auto;
    background-color: ${props => props.theme.secondary};
    border-radius: ${props => props.theme.borderRadius}
      ${props => props.theme.borderRadius} 0 0;
  }
  .cardInfo {
    display: flex;
    flex-direction: column;
    text-align: left;
    max-width: 100%;
    color: ${props => props.theme.main};
    background-color: ${props => props.theme.secodary};
    border-radius: 0 0 ${props => props.theme.borderRadius}
      ${props => props.theme.borderRadius};
    height: 130px;
    justify-content: space-evenly;
    padding: .25rem 1rem 1rem;

    h4,
    h2,
    p {
      margin: 0px;
      padding: 0 5px;
      letter-spacing: .09rem;
    }
    h2{
      text-transform: capitalize;
      letter-spacing: .15rem;
      margin-bottom: -5px;
    }
    p {
      margin-bottom: 5px;
    }
    .sub {
      font-weight: bold;
    }
  }

  &#card-detail {
    width: 50%;
    background: #f5f5f5;
    border: 2px solid #e1e1e1;
    justify-content: space-between;
    margin: 5px;

    .inner-div {
      align-items: center;
      display: flex !important;
    }
  }
  .cartCardInfo {
    background: inherit;
  }

  @media (max-width: 768px) {
    

    .cartCardInfo {
      width: 100%;
      padding: 5px;
      background: inherit;

      h2 {
        font-size: 1rem;
      }
    }

    &.cart-item {
      max-width: 100%;
      width: 100%;
    }
  }
  @media (max-width: 646px) {
    width: 260px;
    min-width: 260px;
    margin: 10px 10px;

    
    &#card-detail {
      width: 100%;
      margin: 30px;
      border: none;
      background: inherit;
    }
  }

  @media (max-width: 578px) {
    width: 230px;
    min-width: 230px;
    margin: 10px 5px;
    
  }

  @media (max-width: 480px) {
    min-width: 50vw;
    max-width: 50vw;
    width: 50vw;
    height: 100%;
    margin: 10px 0;
    justify-content: center;
    .detail-img {
      width: 100%;
      max-width: 100%;
      min-width: 75vw;
    }
    &.cart-item {
      max-width: 100% !important;
      width: 100% !important;
    }
  }

  @media (max-width: 339px) {
    margin: 15px 1px;
  }
`;

export default StyledCard;
