import { Link } from "react-router-dom";
import './Category.css';
import deleteList from "./firebase/firebase_handlers/databaseLogic/deleteHandlers/deleteList";

function ListsItem(props) {
    const item = props.item;
    const totalItems = item.items.length;
    const doneItems = item.items.filter(item => item.done).length;

    const onClickHandler = () => {
        deleteList(item.id);
    }

    return (
        <Link to={item.name}>
            <li className="item">
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>{doneItems} of {totalItems} done</p>
                    <i className="fa-solid fa-trash-can" style={{"color": "#7c7e83"}} onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        onClickHandler();
                    }}></i>
                </div>
            </li>
        </Link>
    );
}

export default ListsItem;