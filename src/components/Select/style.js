import styled from "styled-components";

const StyledSelect = styled.div`

    text-align: start;

    select:focus-within{
        border: 1px solid var(--grey-0);
    }
    label{
        color: var(--grey-0);
        font-size: 12px;
    }

    select{
        border-radius:4px;
        border: none;
        width: 100%;
        height: 40px;
        background: var(--grey-2);
        color: var(--grey-1);
        padding: 0 1rem;
        border: 1px solid var(--grey-2);
        border-radius: 4px;
        margin: 10px 0;
        transition: 0.8s;
    }
`

export default StyledSelect

