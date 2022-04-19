import { createGlobalStyle } from "styled-components"

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
    --grey-3: #212529;
    --grey-4: #121214;
    --toastify-color-success:   #3fe864;
    --toastify-color-error:     #e83f5b;
    --toastify-text-color-dark: #F8F9FA;
    --toastify-color-dark:      #343B41;
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

hr{
    height: 1px;
    background-color: var(--grey-3);
    border: none;
}
`

export default GlobalStyle