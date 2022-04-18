import styled from "styled-components";


const StyledInput = styled.div`
    text-align: start;



    div:focus-within{
        border: 1px solid var(--grey-0);
    }

    div{
        background-color: var(--grey-2);
        width: 100%;
        height: 40px;
        border-radius:4px;
        border: 1px solid var(--grey-2);
        margin: 10px 0;
        transition:0.8s;
    }

    label{
        font-size: 10px;
    }
    
    input{
        background: transparent;
        border: none;
        width: 100%;
        height: 100%;
        padding: 0 1rem;
    }


`

export default StyledInput