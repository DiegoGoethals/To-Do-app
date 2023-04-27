import Loader from "./Loader";
import ToDoList from "./ToDoList";
import { useParams } from 'react-router';
import useFilteredLists from "./hooks/useFilteredLists";

function Lists(props) {
    const itemType = props.itemType;
    const title = useParams().category;
    const {items, loading, error} = useFilteredLists(itemType, title);

    return (
        <div>
            {error && <p>{error}</p>}
            {loading && <Loader/>}
            {items && <ToDoList items={items} title={title}/>}
        </div>
    );
}

export default Lists;