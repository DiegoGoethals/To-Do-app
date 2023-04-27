import './Category.css';
import { Link } from 'react-router-dom';

function Category(props) {
    const item = props.item;
    const description = item.description;

    return (
        <Link to={item.name}>
            <li className="item">
                <div>
                    <h3>{item.name}</h3>
                    <p>{description}</p>
                    <i class="fa-solid fa-trash-can" style={{"color": "#7c7e83"}}></i>
                </div>
            </li>
        </Link>
    );
}

export default Category;