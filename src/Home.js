import { useState } from 'react';
import './Home.css';
import Theme from "./Category";

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
            <ul className="categories">
                {categories.map((category, index) => (
                    <Theme key={index} category={category}/>
                ))}
            </ul>
            <button className='addCategory' onClick={onClickHandler}>Add a new category with to do's</button>
        </div>
    );
}

export default Home;