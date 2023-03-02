import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   :root {
      font-size: 62.5%;
      --mainFont: 'Roboto', sans-serif;
      --background: #1C1D21;
      --containerBg: #25262C;
      --buttonColor: #5F6679;
      --inputFocus: #8B9CCB;
      --lightGrey: #86868C;
      --itemBackground: #292C35;
      --green: #5FFF45;
      --white: #fefefe;
      --h1Size: 4.4rem;
      --textSize: 1.9rem;
   }

   * {
      margin: 0;
      padding: 0;
   }

   body {
      font-family: var(--mainFont);
      background-color: var(--background);
      min-height: 100vh;
   }

   h1 {
      color: var(--white);
      font-size: var(--h1Size);
      text-align: center;
      padding: 6rem 0;
   }

   ul {
      list-style: none;
   }

   @media (max-width: 600px) {
      :root {
         font-size: 50%;
      }
   }
`;
