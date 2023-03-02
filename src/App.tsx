import { useEffect, useState } from "react";
import Container from "./styles/container";
import GlobalStyles from "./styles/global";
import { ItemType } from "./types/Item";
import { v4 as randomID } from "uuid";

import Item from "./components/Item";
import Form from "./components/Form";
import EditForm from "./components/EditForm";

const App = () => {
   const [list, setList] = useState<ItemType[]>(
      JSON.parse(localStorage.getItem("list") || "[]")
   );
   const [showUpdateInput, setShowUpdateInput] = useState<ItemType>();
   const [editedTask, setEditedTask] = useState("");

   useEffect(() => {
      getLocalStorageList();
   }, []);

   useEffect(() => {
      saveLocalStorage();
   }, [list]);

   const getLocalStorageList = () => {
      if (localStorage.getItem("list") === null)
         localStorage.setItem("list", JSON.stringify([]));
   };

   const saveLocalStorage = () => {
      localStorage.setItem("list", JSON.stringify(list));
   };

   const addNewTask = (task: string) => {
      let newList = [...list];
      newList.push({
         id: randomID(),
         text: task,
         checked: false,
      });
      setList(newList);
   };

   const changeCheckedTask = (id: string, checked: boolean) => {
      let newList = [...list];
      for (let i in newList) {
         if (newList[i].id === id) {
            newList[i].checked = checked;
         }
      }
      setList(newList);
   };

   const handlerDeleteTask = (id: string) => {
      let newList = [...list];
      let filteredList = newList.filter((item) => item.id !== id);
      setList(filteredList);
   };

   const handlerShowUpdateInput = (task: ItemType) => {
      setShowUpdateInput(task);
   };

   const handlerEditedTask = (newItemEdited: ItemType) => {
      setEditedTask(newItemEdited.text);
      console.log(newItemEdited);
      let newList = [...list];
      for (let i in newList) {
         if (newList[i].id === newItemEdited.id) {
            newList[i].text = newItemEdited.text;
         }
      }
      setList(newList);
      setShowUpdateInput(undefined);
   };

   return (
      <Container>
         <GlobalStyles />
         <h1>Lista de tarefas</h1>

         <Form submitNewTask={addNewTask} />

         {showUpdateInput && (
            <EditForm
               editedTask={showUpdateInput}
               submitEditedTask={handlerEditedTask}
            />
         )}

         {!showUpdateInput && (
            <ul>
               {list.map((item, index) => (
                  <Item
                     key={index}
                     data={item}
                     changeChecked={changeCheckedTask}
                     deleteTask={handlerDeleteTask}
                     updateTask={handlerShowUpdateInput}
                  />
               ))}
            </ul>
         )}
      </Container>
   );
};

export default App;
