import styled from "styled-components";

const Container = styled.div`
   max-width: 70%;
   margin: auto;
   background: var(--containerBg);
   min-height: 100vh;
   padding: 0 3rem;

   ul {
      max-width: 800px;
      margin: auto;
   }

   @media (max-width: 650px) {
      max-width: 80%;
   }
`;

export default Container;
