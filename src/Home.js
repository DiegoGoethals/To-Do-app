import './Home.css';
import useItems from './hooks/useItems';
import Loader from './Loader';
import CategoryList from './Categorylist';
import AddItem from './AddItem';

function Home(props) {
    const itemType= props.itemType;
    
    const {items, loading, error} = useItems(itemType);

    return (
        <div className="home">
            {error && <p>{error}</p>}
            {loading && <Loader/>}
            {items && <CategoryList items={items} title={itemType}/>}
            <AddItem itemType={itemType}/>
        </div>
    );
}

export default Home;