import { useState } from "react";
import addToDo from "./firebase/firebase_handlers/databaseLogic/addHandlers/addToDo";
import { auth } from "./firebase/firebase_setup/firebase";

function AddToDoField(props) {
    const [newItem, setNewItem] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (auth.currentUser) {
            const toDo = {todo: newItem, done: false};
            addToDo(toDo, props.id).then(() => {
                setNewItem("");
            });
        } else {
            alert("You need to be logged in to add a new to do");
        }
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <label>To do</label>
            <input placeholder='Give your new to do here' type='text' 
                value={newItem} onChange={(e) => {
                    setNewItem(e.target.value);
                }} required>
            </input>
            <button className='addCategory'>Add a new to do to the list</button>
        </form>
    );
}

export default AddToDoField;