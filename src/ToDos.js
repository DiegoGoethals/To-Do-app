import { useParams } from 'react-router-dom';
import './Categorylist.css';
import Loader from './Loader';
import ToDosList from './ToDosList';
import useToDos from './hooks/useToDos';

function ToDos(props) {
    const itemType = props.itemType;
    const title = useParams().list;
    const category = useParams().category;
    const {items, loading, error} = useToDos(itemType, category, title);
    let realItems = [];
    if (items) {
        realItems = items[0].items;
    }

    return (
        <div className="items">
            {error && <p>{error}</p>}
            {loading && <Loader/>}
            {items && <ToDosList items={realItems} title={title}/>}
        </div>
    );
}

export default ToDos;