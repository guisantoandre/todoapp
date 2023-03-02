import { ItemType } from "../../types/Item";
import { ItemLi, CheckboxArea, ActionArea } from "./styles";
import editIcon from "../../svgs/edit.svg";
import deleteIcon from "../../svgs/delete.svg";

type Props = {
   data: ItemType;
   changeChecked: (id: string, checked: boolean) => void;
   deleteTask: (id: string) => void;
   updateTask: (data: ItemType) => void;
};
const Item = ({ data, changeChecked, deleteTask, updateTask }: Props) => {
   return (
      <ItemLi checked={data.checked}>
         <CheckboxArea>
            <input
               type="checkbox"
               id={data.id}
               checked={data.checked}
               onChange={(e) => changeChecked(data.id, e.target.checked)}
            />
            <label htmlFor={data.id}>{data.text}</label>
         </CheckboxArea>
         <ActionArea>
            <img
               src={editIcon}
               alt="Edit Icon"
               onClick={() => updateTask(data)}
            />
            <img
               src={deleteIcon}
               alt="Delete Icon"
               onClick={() => deleteTask(data.id)}
            />
         </ActionArea>
      </ItemLi>
   );
};

export default Item;
