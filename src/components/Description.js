import styled from "styled-components";
import StyledDiv from "./StyledDiv"

const Description = styled(StyledDiv)`
    flex-direction: column;
    margin: 0 auto;
    max-width: 500px;

    .cardInfo {

      h2{
      text-transform: capitalize;
      }
    }


    .button-options {
      display: flex;
      select {
        align-self: center;
        height: min-content;
        width: max-content;
      }
    }
    @media (max-width: 768) {
        .cart-description {
          padding: 0;
          margin: 0;
        }
        
      }
    &.cart-description {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .add-sub-container {
      display: flex;
      flex-direction: column;
      padding: 5px;
    }
`;
export default Description;