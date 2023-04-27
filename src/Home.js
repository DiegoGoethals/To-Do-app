import './Home.css';
import useItems from './hooks/useItems';
import addItem from './firebase/firebase_handlers/addItem';
import Loader from './Loader';
import { useState } from 'react';
import CategoryList from './Categorylist';

function Home(props) {
    const itemType= props.itemType;
    const [newItem, setNewItem] = useState("");
    const [description, setDescription] = useState("");
    
    const {items, loading, error} = useItems(itemType);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const category = {name: newItem, description: description};
        addItem(category, itemType).then(() => {
            setNewItem("");
            setDescription("");
        });
    };

    return (
        <div className="home">
            {error && <p>{error}</p>}
            {loading && <Loader/>}
            {items && <CategoryList items={items} title={itemType}/>}
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
        </div>
    );
}

export default Home;