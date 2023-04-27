import Loader from "./Loader";
import useItems from "./hooks/useItems";
import ToDoList from "./ToDoList";
import { useParams } from 'react-router';

function Lists(props) {
    const itemType = props.itemType;
    const title = useParams().category;
    const {items, loading, error} = useItems(itemType);

    return (
        <div>
            {error && <p>{error}</p>}
            {loading && <Loader/>}
            {items && <ToDoList items={items} title={title}/>}
        </div>
    );
}

export default Lists;