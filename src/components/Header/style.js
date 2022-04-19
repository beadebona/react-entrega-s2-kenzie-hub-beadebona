import styled from "styled-components";

const StyledHeader = styled.header`
    max-width: ${props=>props.header? "100vw": "350px"};
    width: ${props=>props.header? "100vw": "90%"};
    display: flex;
    align-items: center;
    justify-content:${props=>props.header? "space-around;": "space-between;"};
    margin: 0 auto;
    border-bottom: ${props=>props.header? "solid 1px #212529": "none"};

    button{
        width:60px;
        background: var(--grey-3);
        transition: 0.8s;
        height: 40px;
        border-radius: 4px;
        border: none;
        margin: 10px 0;
        transition: 0.8s;
    }
    button:hover{
        background: var(--grey-2)
    }

`

export default StyledHeader