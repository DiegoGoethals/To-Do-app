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
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const category = document.querySelector('input').value;
        setCategories([...categories, category]);
        document.querySelector("form").reset();
    };

    return (
        <div className="home">
            <Itemlist items={categories} title="Categories"/>
            <form onSubmit={onSubmitHandler}>
                <input placeholder='Give your new category name here' type='text' required></input>
                <button className='addCategory'>Add a new category with to do's</button>
            </form>
        </div>
    );
}

export default Home;