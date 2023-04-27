import './AddItem.css';
import { useState } from 'react';
import addItem from './firebase/firebase_handlers/addItem';

function AddItem(props) {
    const [newItem, setNewItem] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const category = {name: newItem, description: description};
        addItem(category, props.itemType).then(() => {
            setNewItem("");
            setDescription("");
        });
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <label>Category name</label>
            <input placeholder='Give your new category name here' type='text' 
                value={newItem} onChange={(e) => {
                    setNewItem(e.target.value);
                }} required>
            </input>
            <label>Category description</label>
            <input placeholder='Give your description here' type='text' 
                value={description} onChange={(e) => {
                    setDescription(e.target.value);
                }} required>
            </input>
            <button className='addCategory'>Add a new category with to do's</button>
        </form>
    );
}

export default AddItem;