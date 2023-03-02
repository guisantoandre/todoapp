import { useState } from "react";
import { ItemType } from "../../types/Item";
import { EditArea } from "./styles";

type Props = {
   editedTask: ItemType;
   submitEditedTask: (newItemEdited: ItemType) => void;
};
const EditForm = ({ editedTask, submitEditedTask }: Props) => {
   const [updatedTask, setUpdatedTask] = useState(editedTask.text);

   const saveEditedTask = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      if (updatedTask !== "") {
         editedTask.text = updatedTask.trim();
         let newItemEdited = editedTask;
         submitEditedTask(newItemEdited);
      } else {
         alert("Preencha o campo abaixo para poder salvar.");
      }
   };

   return (
      <EditArea>
         <input
            type="text"
            autoFocus
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
            required
         />
         <button onClick={saveEditedTask}>Salvar</button>
      </EditArea>
   );
};

export default EditForm;
