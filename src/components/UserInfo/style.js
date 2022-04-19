import styled from "styled-components"

const StyledInfo = styled.div`
    display: flex;
    justify-content: space-evenly;  
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 15vh;
    margin: auto;

    h3{
        font-weight: 700;
        font-size: 1.2rem;
    }
    p{
        color: var(--grey-1);
        font-size: 12px;
    }
    @media screen and (min-width: 500px){
        justify-content: space-between;
        flex-direction: row;
    }

    @media screen and (min-width: 800px){
        width: 60%; 
        justify-content: space-between;
        flex-direction: row;
    }

`

export default StyledInfo