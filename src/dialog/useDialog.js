import { useState } from "react";

const possibleStates = Object.freeze({
    EN_COURS :{
        icon: "in_progress"
    },
    TERMINE: {
        icon: "done"
    }
});

export function useDialog() {
    const [listItem, setListItem] = useState([]);
    const [numberOfTasks, setNumberOfTasks] = useState(0);

    // Fonction pour ajouter une tâche

    function addItem(name) {
        const newItem = {
            id: listItem.length + 1,
            name: name,
            state: possibleStates.EN_COURS
        };
        setListItem([...listItem, newItem]);
        setNumberOfTasks(numberOfTasks + 1);
    }

    // Fonction pour supprimer une tâche

    
    // Fonction pour changer l'état d'une tâche
    return {
        listItem,
        addItem,
        numberOfTasks
    };
};