import React, { useState } from "react";
import { FormArea } from "./styles";

type Props = {
   submitNewTask: (task: string) => void;
};
const Form = ({ submitNewTask }: Props) => {
   const [inputText, setInputText] = useState("");

   const submitTask = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      if (inputText !== "") {
         submitNewTask(inputText.trim());
         setInputText("");
      }
   };

   return (
      <FormArea>
         <input
            type="text"
            placeholder="Nova tarefa"
            autoFocus
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
         />
         <button onClick={submitTask}>+</button>
      </FormArea>
   );
};

export default Form;
