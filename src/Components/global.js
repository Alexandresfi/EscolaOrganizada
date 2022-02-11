import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    @media (max-width: 1080px){
        font-size: 93.75%;
    }
    @media (max-width: 720px) {
        font-size: 87.75%;
    }
}
body{
    background-color: #2b2d42;
    font-family: 'Poppins', sans-serif;
    color: white;
    font-style: normal;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
}
a{
    text-decoration: none;
    color: white;
}
li{
    list-style: none;
}
`