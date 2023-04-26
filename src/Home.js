import './Home.css';
import useItems from './useItems';
import Itemlist from './Itemlist';
import addCategory from './firebase_handlers/addCategory';
import Loader from './Loader';

function Home() { 
    const {categories, loading, error} = useItems();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const category = {type: document.querySelector('input').value, items: []};
        addCategory(category);
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