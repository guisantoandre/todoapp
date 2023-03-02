import styled from "styled-components";

export const EditArea = styled.form`
   position: relative;
   max-width: 800px;
   margin: 0 auto 3rem;
   display: flex;

   input {
      padding: 1.2rem;
      font-size: var(--textSize);
      background-color: var(--itemBackground);
      border: 1px solid var(--buttonColor);
      border-radius: 6px 0 0 6px;
      width: 100%;
      color: var(--white);

      &:focus {
         outline: none;
         border: 1px solid var(--inputFocus);
      }
   }

   button {
      background-color: var(--buttonColor);
      color: var(--white);
      width: 80px;
      border: none;
      border-radius: 0 6px 6px 0;
      cursor: pointer;
      font-size: 1.8rem;
      padding: 0 1.3rem;
      transition: opacity 0.2s ease;
      display: grid;
      place-items: center;

      &:hover {
         opacity: 0.8;
      }
   }
`;
