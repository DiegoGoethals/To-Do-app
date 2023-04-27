import { useState } from "react";
import addToDo from "./firebase/firebase_handlers/addToDo";

function AddToDoField(props) {
    const [newItem, setNewItem] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const toDo = {todo: newItem, done: false};
        addToDo(toDo, props.id).then(() => {
            setNewItem("");
        });
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