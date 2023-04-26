import { useState, useEffect } from 'react';
import './Home.css';
import Itemlist from './Itemlist';
import getCategories from './firebase_handlers/getCategories';
import addCategory from './firebase_handlers/addCategory';
import Loader from './Loader';

function Home() { 
    const [categories, setCategories] = useState(null);
    const [change, setChange] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCategories().then((snapshot) => {
            const categories = snapshot.docs.map((doc) => {
                return {id: doc.id, ...doc.data()};
            });
            setCategories(categories);
            setLoading(false);
            setError(null);
        }).catch((err) => {
            console.log(err);
            setError("Something went wrong");
            setLoading(false);
        });
    }, [change]);
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const category = {type: document.querySelector('input').value, items: []};
        addCategory(category);
        if (change) {
            setChange(false);
        } else {
            setChange(true);
        }
        document.querySelector("form").reset();
    };

    return (
        <div className="home">
            {error && <p>{error}</p>}
            {loading && <Loader/>}
            {categories && <Itemlist items={categories} title="Categories"/>}
            <form onSubmit={onSubmitHandler}>
                <input placeholder='Give your new category name here' type='text' required></input>
                <button className='addCategory'>Add a new category with to do's</button>
            </form>
        </div>
    );
}

export default Home;