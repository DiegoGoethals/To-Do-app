import { useState } from 'react';
import './Home.css';
import Itemlist from './Itemlist';

function Home() { 
    const [categories, setCategories] = useState([
            {type: "Programming projects", items: [
                {type: "Project 1", done: true}, {type: "Project 2", done: false}, {type: "Project 3", done: true}
            ]},
            {type: "Household chores", items: [
                {type: "Clean the kitchen", done: false}, {type: "Do the laundry", done: false}, {type: "Take out the trash", done: true}
            ]},
            {type: "Shopping list", items: [
                {type: "Milk", done: false}, {type: "Bread", done: true}, {type: "Eggs", done: false}
            ]},
            {type: "School assignments", items: [
                {type: "Math homework", done: false}, {type: "English essay", done: false}, {type: "History project", done: false}
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