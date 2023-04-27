import { useParams } from 'react-router-dom';
import './Categorylist.css';
import Loader from './Loader';
import ToDosList from './ToDosList';
import useToDos from './hooks/useToDos';
import AddToDoField from './AddToDoField';

function ToDos(props) {
    const itemType = props.itemType;
    const title = useParams().list;
    const category = useParams().category;
    const {items, loading, error} = useToDos(itemType, category, title);
    let realItems = [];
    let id = "";
    if (items) {
        realItems = items[0].items;
        id = items[0].id;
    }

    return (
        <div className="items">
            {error && <p>{error}</p>}
            {loading && <Loader/>}
            {items && <ToDosList items={realItems} title={title}/>}
            <AddToDoField id={id}/>
        </div>
    );
}

export default ToDos;