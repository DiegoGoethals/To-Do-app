import './Home.css';
import Loader from "./Loader";
import ToDoList from "./ToDoList";
import { useParams } from 'react-router';
import useFilteredLists from "./hooks/useFilteredLists";
import AddItem from "./AddItem";

function Lists(props) {
    const itemType = props.itemType;
    const title = useParams().category;
    const {items, loading, error} = useFilteredLists(itemType, title);

    return (
        <div className='home'>
            {error && <p>{error}</p>}
            {loading && <Loader/>}
            {items && <ToDoList items={items} title={title}/>}
            <AddItem itemType={itemType}/>
        </div>
    );
}

export default Lists;