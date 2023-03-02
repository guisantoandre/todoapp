import styled from "styled-components";

export const FormArea = styled.form`
   position: relative;
   max-width: 800px;
   margin: 0 auto 3rem;
   display: flex;

   input {
      padding: 1.2rem;
      font-size: var(--textSize);
      background-color: var(--itemBackground);
      border: 2px solid var(--buttonColor);
      border-radius: 6px 0 0 6px;
      width: 100%;
      color: var(--white);

      &:focus {
         outline: none;
         border: 2px solid var(--inputFocus);
      }
   }

   button {
      background-color: var(--buttonColor);
      color: var(--white);
      width: 60px;
      border: none;
      border-radius: 0 6px 6px 0;
      cursor: pointer;
      font-size: 2.4rem;
      transition: opacity 0.2s ease;

      &:hover {
         opacity: 0.8;
      }
   }
`;
