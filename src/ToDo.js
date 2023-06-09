import './Category.css';
import deleteToDo from './firebase/firebase_handlers/databaseLogic/deleteHandlers/deleteToDo';
import toDoDoneChange from './firebase/firebase_handlers/databaseLogic/toDoDoneChange';

function ToDo(props) {
    const item = props.item;
    let done = <i className="fa-solid fa-circle-xmark" style={{"color": "#d60000"}}></i>
    if (item.done) {
        done = <i className="fa-sharp fa-solid fa-circle-check" style={{"color": "#47e006"}}></i>;
    }

    const onClickHandler = () => {
        deleteToDo(item.todo, props.id);
    }

    const changeDone = () => {
        toDoDoneChange(item, props.id);
    }

    return (
        <li className="item" onClick={changeDone}>
            <div>
                <h3>{done} {item.todo}</h3>
                <i className="fa-solid fa-trash-can" style={{"color": "#7c7e83"}} onClick={ (e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        onClickHandler();
                    }
                }></i>
            </div>
         </li>
    )
}

export default ToDo;