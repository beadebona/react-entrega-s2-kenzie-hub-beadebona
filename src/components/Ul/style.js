import styled from "styled-components"

const StyledUl = styled.ul`
    width:90%;
    margin: 0 auto;
    background-color: var(--grey-3);
    border-radius: 4px;
    padding: 0.2rem 1rem;
    transition: 0.8s;
    
    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
        background-color: var(--grey-4);
        border-radius: 4px;
        margin: 1rem 0;
        height: 40px;
        padding: 0 0.8rem;
        transition: 0.8s;
    }
    li:hover{
        background-color: var(--grey-2);
    }
    p{
        max-width: 15ch;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    span{
        color: var(--grey-1);
        font-size: 12px;
        transition: 0.8s;
    }


    @media screen and (min-width: 800px){
        width: 60%;   
    }
`

export default StyledUl