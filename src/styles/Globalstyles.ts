import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
@import 
url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap');

 
 *{
   margin:0;
   padding:0;
   outline:0;
   box-sizing:0;
   box-sizing: border-box;
 }

 body{
   font: 400 14px Roboto, sans-serif;
   background:#f0f0f5;
   -webkit-font-smoothing: antialiased;
 }

 input,button,textarea{
    font: 400 14px Roboto, sans-serif;


 }

 button{
   cursor: pointer;
 }
`;
