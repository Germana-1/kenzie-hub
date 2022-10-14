import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-align: center;
    }
    button{
        cursor: pointer;
        border: none;
        background: transparent;
    } 
    ul, ol, li{
        list-style: none;
    }   
    body{
        background-color: var(--color-grey-4);
    }
    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --color-grey-0:#F8F9FA;
        --color-grey-1: #868E96;        
        --color-grey-2: #343B41;
        --color-grey-3: #212529;  
        --color-grey-4: #121214;     
        --color-white: #ffffff;
        --toastify-color-success:#3FE864;
        --toastify-color-error:#E83F5B;
        --toastify-text-color-light:#F8F9FA;
    }  
    
    .dark{
        background-color: var(--color-grey-2);
    }
`;
