import styled from "styled-components";

const StyledButton = styled.button`
    width: 100%;
    height: 40px;
    background: var(--primary);
    border-radius: 4px;
    border: none;
    color: var(--grey-0);
    margin: 10px 0;
    transition: 0.8s;
    
    &:hover{
        background: var(--primary-focus)
    }
`

export default StyledButton