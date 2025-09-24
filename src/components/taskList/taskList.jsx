// Ce composant est utilisé pour afficher la liste des tâches.
import {TaskItem} from "../taskItem/taskItem";
import styles from "./taskList.module.css";
import {use, useEffect, useState} from "react";

export const TaskList = (nbTasks) => {
    const [len, setLen] = useState(nbTasks.nbTasks);
    const [tache, setTaches] = useState("tâches");

    useEffect(() => {
        if(nbTasks.nbTasks === 0){
            setLen("aucune");
            setTaches("tâche");
        }
        else if (nbTasks.nbTasks === 1) {
            setLen(nbTasks.nbTasks);
            setTaches("tâche");
        }
        else {
            setLen(nbTasks.nbTasks);
            setTaches("tâches");
        }
    }, [nbTasks.nbTasks]);

    return (
        <div className="box">
            <h2 className={styles.title}>Il reste {len} {tache} à traiter</h2>
            <ul className={styles.container}>
                <TaskItem/>
                <TaskItem/>
                <TaskItem/>
            </ul>
        </div>
    );
};
