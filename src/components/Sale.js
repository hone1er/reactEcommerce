import styled from "styled-components";

export const SaleDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
max-width: 1440px;
background: ${(props) => props.theme.secondary};
color: ${(props) => props.theme.main};
margin: 2rem auto;
padding: 1rem;
h1, h2, p {
    margin: 4px;
}
.top-header {
    text-transform: capitalize;
}
.bottom-header {
    text-transform: uppercase;
}

p {
    font-size: 1.2rem;
    color: ${props => props.theme.main + "99"}
}

`;
