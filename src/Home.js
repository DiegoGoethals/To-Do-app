import './Home.css';
import useItems from './useItems';
import Itemlist from './Itemlist';
import addItem from './firebase_handlers/addItem';
import Loader from './Loader';
import { useState } from 'react';

function Home() {
    const [itemType, setItemType] = useState('categories');
    const [newItem, setNewItem] = useState("");
    const [description, setDescription] = useState("");
    
    const {items, loading, error} = useItems(itemType);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const category = {name: newItem, description: description};
        addItem(category, itemType).then(() => {
            setNewItem("");
            setDescription("");
            setItemType("null");
            setItemType("categories");
        });
    };

    return (
        <div className="home">
            {error && <p>{error}</p>}
            {loading && <Loader/>}
            {items && <Itemlist items={items} title={itemType}/>}
            <form onSubmit={onSubmitHandler}>
                <input placeholder='Give your new category name here' type='text' 
                    value={newItem} onChange={(e) => {
                        setNewItem(e.target.value);
                    }} required>
                </input>
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