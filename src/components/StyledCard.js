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
    color: ${props => props.theme.main};
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
    background: ${props => props.theme.secondary};
    color: ${props => props.theme.main};
    padding: 10px;
    border-radius: 0 0 ${props => props.theme.borderRadius}
      ${props => props.theme.borderRadius};
    height: 130px;
    justify-content: space-evenly;

    h4,
    h2,
    p {
      margin: 3px;
      padding: 0 10px;
    }
    .sub {
      font-weight: bold;
    }
  }

  &#card-detail {
    width: 98%;
    background: #f5f5f5;
    border: 2px solid #e1e1e1;
    justify-content: space-around;
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
    &#card-detail {
      width: fit-content;
      margin: 30px;
      border: none;
      background: inherit;
    }

    .cartCardInfo {
      width: min-content;
      padding: 5px;
      background: inherit;
    }
  }
  @media (max-width: 646px) {
    width: 260px;
    min-width: 260px;
    margin: 10px 10px;
    &#card-detail {
    }
  }

  @media (max-width: 578px) {
    width: 230px;
    min-width: 230px;
    margin: 10px 5px;
    &#card-detail {
    }
  }

  @media (max-width: 480px) {
    min-width: 48vw;
    max-width: 48vw;
    width: 48vw;
    height: 100%;
    margin: 10px auto;
    .detail-img {
      width: 100%;
      max-width: 100%;
      min-width: 70vw;
    }
  }

  @media (max-width: 339px) {
    width: 157px;
    min-width: 157px;
    margin: 15px 1px;
  }
`;

export default StyledCard;
