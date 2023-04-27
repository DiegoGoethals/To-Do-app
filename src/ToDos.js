import './Categorylist.css';
import ToDo from './ToDo';

function ToDos() {
    return (
        <div className="items">
            <h2>To Do List</h2>
            <ul className="list">
                <ToDo/>
            </ul>
        </div>
    );
}

export default ToDos;