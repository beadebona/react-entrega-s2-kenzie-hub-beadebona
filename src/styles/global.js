import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
}

:root{
    --primary: #FF577F;
    --primary-focus: #ff427f;
    --primary-negative: #59323f;
    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212520;
    --grey-4: #121214;
    --sucess: #3fe864;
    --error: #e83f5b;
}

body{
    background-color: var(--grey-4);
}

body, input, button, select{
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    color: var(--grey-0);
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}
`

export default GlobalStyle