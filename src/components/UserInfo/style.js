import styled from "styled-components"

const StyledInfo = styled.div`
    display: flex;
    justify-content: space-between;
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

    @media screen and (min-width: 800px){
        width: 60%;   
    }

`

export default StyledInfo