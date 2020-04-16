import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: max-content;
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${props =>
    props.inCart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: var(--lightBlue);
  color: ${props => (props.inCart ? "var(--mainYellow)" : "var(--lightBlue)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  outline-color: red;
  cursor: pointer;
  display: inline-block;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;

  &.checkout-button,
  &.checkout-button:hover {
    background: var(--mainYellow);
    color: var(--mainDark);
    border: none;
  }

  &:hover {
    background: var(--lightBlue);
    background: ${props =>
      props.inCart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
    cursor: ${props => (props.inCart ? "normal" : "pointer")};
  }
  &:focus {
    outline: none;
  }

  &.add-sub-item {
    width: 60px;
    height: 60px;
  }
`;
