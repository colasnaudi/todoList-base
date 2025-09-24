import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/taskList";
import {useDialog} from "../dialog/useDialog.js";

// Ce composant est utilisé pour afficher l'intégralité de la fonctionalité de Tache.
export const TaskContainer = () => {
    const { listItem, addItem, deleteItem, toggleItemState, numberOfTasks, numberOfDoneTasks } = useDialog();

  return (
    <main>
      <Header />
      <TaskInput addItem={addItem} />
      <TaskList listItem={listItem} nbTasks={numberOfTasks} removeItem={deleteItem} changeItem={toggleItemState} />
      <Footer len={numberOfDoneTasks} />
    </main>
  );
};
