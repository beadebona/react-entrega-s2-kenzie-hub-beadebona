import styled from "styled-components"

const StyledContainer = styled.dialog`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    background-color: transparent;
    border: none;

    p{
        color: var(--grey-0);
    }
    header{
        background-color: var(--grey-2);
        padding: 1rem;
        width: 100%;
        border-radius: 4px 4px 0 0 ;
        height: 50px;
    }

    header button{
        background-color: var(--grey-2)
    }

    form{
        margin-top:1rem;
        padding: 0 1rem;
    }
    
    dialog{
        width: 90%;
        max-width: 350px;
        height: ${(props)=>props.newTechSchema? `${300}px`:`${350}px`};
        margin: auto;
        background-color: var(--grey-3);
        border: none;
        border-radius: 4px;
        margin-top: 10%;
        
    }

    .box{
        margin: 0 1rem ;
    }
`

export default StyledContainer