import { useState } from 'react';
import './Home.css';
import Itemlist from './Itemlist';

function Home() { 
    const [categories, setCategories] = useState([
            "Programming projects",
            "Household chores",
            "Shopping list",
            "School assignments"
        ]);
    
    const onClickHandler = () => {
        setCategories([...categories, "New category"]);
    };

    return (
        <div className="home">
            <Itemlist items={categories} title="Categories"/>
            <button className='addCategory' onClick={onClickHandler}>Add a new category with to do's</button>
        </div>
    );
}

export default Home;