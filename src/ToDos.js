import { useParams } from 'react-router-dom';
import './Categorylist.css';
import Loader from './Loader';
import ToDosList from './ToDosList';
import useToDos from './hooks/useToDos';
import AddToDoField from './AddToDoField';

function ToDos() {
    const title = useParams().list;
    const id = localStorage.getItem("list");
    const {items, loading, error} = useToDos(id);

    return (
        <div className="items">
            {error && <p>{error}</p>}
            {loading && <Loader/>}
            {items && <ToDosList items={items} title={title} id={id}/>}
            <AddToDoField id={id}/>
        </div>
    );
}

export default ToDos;