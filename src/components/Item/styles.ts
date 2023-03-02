import styled from "styled-components";
import checkedIcon from "../../svgs/checked.svg";

type LiProps = {
   checked: boolean;
};
export const ItemLi = styled.li<LiProps>`
   color: var(--white);
   font-size: var(--textSize);
   padding: 1rem 1.3rem;
   margin-bottom: 0.5rem;
   background: ${(props) => (props.checked ? "var(--itemBackground)" : "none")};
   border-radius: 6px;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const CheckboxArea = styled.div`
   input[type="checkbox"] {
      display: none;
   }

   label {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      // word-break: break-all; /* uncomment this to break line based on letter */
   }

   label:before {
      content: "";
      display: inline-block;
      min-width: 18px;
      min-height: 18px;
      border-radius: 4px;
      background-color: none;
      border: 2px solid #7b7b7b;
      cursor: pointer;
      margin-right: 8px;
      vertical-align: middle;
      margin-bottom: 3px;
   }

   input:checked + label:before {
      background-color: var(--green);
      background-image: url("${checkedIcon}");
      background-repeat: no-repeat;
      background-position: center;
      border: none;
      padding: 2px;
   }

   input[type="checkbox"]:checked ~ label {
      text-decoration: line-through;
      color: var(--lightGrey);
   }
`;

export const ActionArea = styled.div`
   display: flex;
   align-items: center;
   height: fit-content;

   img {
      margin-left: 2rem;
      cursor: pointer;
      transition: opacity 0.2s ease;

      &:hover {
         opacity: 0.8;
      }
   }
`;
