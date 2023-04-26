import { useState } from 'react';
import './Home.css';
import Itemlist from './Itemlist';

function Home() { 
    const [categories, setCategories] = useState([
            {type: "Programming projects", items: [
                "Project 1", "Project 2","Project 3"
            ]},
            {type: "Household chores", items: [
                "Clean the kitchen", "Do the laundry", "Take out the trash"
            ]},
            {type: "Shopping list", items: [
                "Milk", "Bread", "Eggs"
            ]},
            {type: "School assignments", items: [
                "Math homework", "English essay", "History project"
            ]},
        ]);
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const category = {type: document.querySelector('input').value, items: []};
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