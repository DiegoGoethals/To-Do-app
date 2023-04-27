import './Home.css';
import useItems from './hooks/useItems';
import addItem from './firebase/firebase_handlers/addItem';
import Loader from './Loader';
import { useState } from 'react';
import CategoryList from './Categorylist';
import AddItem from './AddItem';

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
            <AddItem onSubmitHandler={onSubmitHandler} newItem={[newItem, setNewItem]} description={[description, setDescription]}/>
        </div>
    );
}

export default Home;