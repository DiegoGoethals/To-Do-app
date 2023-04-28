import './Category.css';
import { Link } from 'react-router-dom';
import deleteCategory from './firebase/firebase_handlers/databaseLogic/deleteHandlers/deleteCategory';

function Category(props) {
    const item = props.item;
    const description = item.description;

    const onClickHandler = () => {
        deleteCategory(item.id, item.name);
    };

    return (
        <Link to={item.name}>
            <li className="item">
                <div>
                    <h3>{item.name}</h3>
                    <p>{description}</p>
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

export default Category;