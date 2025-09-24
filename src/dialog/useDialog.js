import { useState } from "react";

const possibleStates = Object.freeze({
    EN_COURS: {
        isDone: false,
    },
    TERMINE: {
        isDone: true,
    }
});

export function useDialog() {
    const [listItem, setListItem] = useState([]);
    const [numberOfTasks, setNumberOfTasks] = useState(0);
    const [numberOfDoneTasks, setNumberOfDoneTasks] = useState(0);
    const [nextId, setNextId] = useState(1);

    // Fonction pour ajouter une tâche

    function addItem(name) {
        const newItem = {
            id: nextId,
            name: name,
            state: possibleStates.EN_COURS
        };
        setNextId(nextId + 1);
        setListItem([...listItem, newItem]);
        setNumberOfTasks(numberOfTasks + 1);
    }

    // Fonction pour supprimer une tâche

    function deleteItem(id) {
        const updatedList = listItem.filter((item) => item.id !== id);
        setListItem(updatedList);
        setNumberOfTasks(updatedList.filter(item => !item.isDone).length);
    }

    // Fonction pour changer l'état d'une tâche

    function toggleItemState(id) {
        const updatedList = listItem.map((item) => {
            if (item.id === id) {
                item.isDone = !item.isDone;
                if (item.isDone) {
                    setNumberOfDoneTasks(numberOfDoneTasks + 1);
                } else {
                    setNumberOfDoneTasks(numberOfDoneTasks - 1);
                }
            }
            return item;
        });
        setListItem(updatedList);
        setNumberOfTasks(updatedList.filter(item => !item.isDone).length);
    }

    return {
        listItem,
        addItem,
        numberOfTasks,
        numberOfDoneTasks,
        deleteItem,
        toggleItemState
    };
};
