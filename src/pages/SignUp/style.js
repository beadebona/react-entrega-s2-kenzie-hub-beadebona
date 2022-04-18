import styled from "styled-components";

const StyledDiv = styled.div`
    width: 90%;
    max-width: 350px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        width:60px;
        background: var(--grey-3);
        transition: 0.8s;
    }
    button:hover{
        background: var(--grey-2)
    }
`

export default StyledDiv

