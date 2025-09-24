// Ce composant est utilisé pour afficher le champ de saisie de tâche.
import styles from "./taskInput.module.css";
import {useState} from "react";

export const TaskInput = (addItem) => {
    const [name, setName] = useState("");

    const onChange = (e) => {
        setName(e.target.value);
    }
    const addItemForm = (e) => {
        e.preventDefault();
        if (name === "") return;
        addItem.addItem(name);
        setName("");
    }
    return (
        <div className={`box ${styles.element}`}>
            <h2 className={styles.title}>Ajouter une nouvelle tâche</h2>
            <form className={styles.container} onSubmit={addItemForm}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Ajouter une nouvelle tâche"
                    value={name}
                    onChange={onChange}
                />
                <button className="button-primary" type="submit">
                    Ajouter
                </button>
            </form>
        </div>
    );
};
