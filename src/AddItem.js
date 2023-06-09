import './AddItem.css';
import { useState } from 'react';
import addItem from './firebase/firebase_handlers/databaseLogic/addHandlers/addItem';
import { useParams } from 'react-router-dom';
import { auth } from './firebase/firebase_setup/firebase';

function AddItem(props) {
    const [newItem, setNewItem] = useState("");
    const [description, setDescription] = useState("");
    const route = useParams().category;

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (auth.currentUser) {
            let category = {name: newItem, description: description, user: auth.currentUser.uid};
            if (props.itemType === 'to do lists') {
                category.items = [];
                category.category = route;
            }
            addItem(category, props.itemType).then(() => {
                setNewItem("");
                setDescription("");
            });
        } else {
            alert("You need to be logged in to add a new category");
        }
    };

    let buttonText = props.itemType === 'to do lists' ? 'Add a new to do list' : 'Add a new category';

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
            <button className='addCategory'>{buttonText}</button>
        </form>
    );
}

export default AddItem;