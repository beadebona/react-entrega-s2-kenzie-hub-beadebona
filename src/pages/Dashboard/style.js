import styled from "styled-components"

const StyledContainer = styled.div`
    width:90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem auto;

    h3{
        font-size: 1rem;
    }
    button{
        width: 2rem;
        height: 2rem;
        background: var(--grey-3);
        transition: 0.8s;
        border-radius: 4px;
        border: none;
        margin: 10px 0;
        transition: 0.8s;
        font-size: 1.5rem;
    }
    button:hover{
        background: var(--grey-2)
    }
    div{
        background: var(--grey-3)
    }


    @media screen and (min-width: 800px){
        width: 60%;   
    }
`

export default StyledContainer