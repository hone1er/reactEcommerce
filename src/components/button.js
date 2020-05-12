import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: max-content;
  text-transform: capitalize;
  font-size: 1.4rem;
  border: 0.05rem solid var(--lightBlue);
  border-color:${props => (!props.inCart ? props.theme.main: props.theme.main)};
  background-color:${props => (!props.inCart ? props.theme.main: props.theme.secondary)};
  color: var(--lightBlue);
  color: ${props => (!props.inCart ? props.theme.secondary: props.theme.main)};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  outline-color: red;
  cursor: ${props => (props.inCart ? "normal": "pointer")};
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
    color: ${props => (!props.inCart ? props.theme.main: props.theme.main)};
    background: ${props => (!props.inCart ? props.theme.secondary: props.theme.secondary)};
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
