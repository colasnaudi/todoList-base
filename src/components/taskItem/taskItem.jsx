// Ce composant est utilisé pour afficher une tâche.
import styles from "./taskItem.module.css";
import TrashIcon from "../icons/TrashIcon";
import Validate from "../icons/ValidateIcon";
import Undo from "../icons/UndoIcon";
import { useDialog } from "../../dialog/useDialog";

export const TaskItem = ({ task, removeItem, changeItem }) => {

  return (
    <li className={`${styles.container} ${task.isDone ? styles.success : styles.default}`}>
      <div className={styles.item}>
        <div className={`${styles.id} ${task.isDone ? styles.idSuccess : styles.idDefault}`}>{task.id}</div>
        <div className={task.isDone ? styles.contentSuccess : styles.contentDefault}>{task.name}</div>
      </div>
      <div className={styles.actions}>
        <button className="button-primary" onClick={() => changeItem(task.id)}>
          {task.isDone ? <Undo /> : <Validate />}
        </button>
        <button className="button-primary" onClick={() => removeItem(task.id)}>
          <TrashIcon />
        </button>
      </div>
    </li>
  );
};
