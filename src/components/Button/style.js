import styled from "styled-components";

const StyledButton = styled.button`
    width: 100%;
    height: 40px;
    background: ${(props)=>props.greySchema? "#868E96":"#FF577F"};
    border-radius: 4px;
    border: none;
    color: var(--grey-0);
    margin: 10px 0;
    transition: 0.8s;
    
    &:hover{
        background: ${(props)=>props.greySchema? "#343B41":"#FF427F"};
    }
`

export default StyledButton