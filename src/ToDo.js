import './Category.css';
import deleteToDo from './firebase/firebase_handlers/deleteHandlers/deleteToDo';

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
        
    }

    return (
        <li className="item">
            <div>
                <h3>{done} {item.todo}</h3>
                <i className="fa-solid fa-trash-can" style={{"color": "#7c7e83"}} onClick={onClickHandler}></i>
            </div>
         </li>
    )
}

export default ToDo;