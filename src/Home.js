import { useState, useEffect } from 'react';
import './Home.css';
import Itemlist from './Itemlist';
import getCategories from './firebase_handlers/getCategories';
import addCategory from './firebase_handlers/addCategory';

function Home() { 
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((snapshot) => {
            const categories = snapshot.docs.map((doc) => {
                return {id: doc.id, ...doc.data()};
            });
            setCategories(categories);
        });
    });
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const category = {type: document.querySelector('input').value, items: []};
        addCategory(category);
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