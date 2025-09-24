// Ce composant est utilisé pour afficher la liste des tâches.
import {TaskItem} from "../taskItem/taskItem";
import styles from "./taskList.module.css";
import {use, useEffect, useState} from "react";

export const TaskList = ({ nbTasks, listItem }) => {
    const [len, setLen] = useState(nbTasks);
    const [tache, setTaches] = useState("tâches");

    useEffect(() => {
        if(nbTasks === 0){
            setLen("aucune");
            setTaches("tâche");
        }
        else if (nbTasks === 1) {
            setLen(nbTasks);
            setTaches("tâche");
        }
        else {
            setLen(nbTasks);
            setTaches("tâches");
        }
    }, [nbTasks]);

    return (
        <div className="box">
            <h2 className={styles.title}>Il reste {len} {tache} à traiter</h2>
            <ul className={styles.container}>
                {listItem.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
};
