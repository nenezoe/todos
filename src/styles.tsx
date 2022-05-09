import { createGlobalStyle } from "styled-components";

export const colors = {
    primary: "#00d4ff"
};

export const GlobalStyle = createGlobalStyle`
   * {
       box-sizing: border-box;
   }
   
   body {
        color: #fff;
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(29,31,31,0.7455357142857143) 63%, rgba(50,48,44,1) 100%, rgba(0,212,255,1) 100%);
        box-shadow: 5px 10px #888888;
    }

    body, input {
        font-family: 'Roboto', sans-serif;
    }
`