import './Category.css';
import { Link } from 'react-router-dom';

function Category(props) {
    const item = props.item;
    const description = item.description;
    //const totalItems = item.items.length;
    // const doneItems = item.items.filter(item => item.done).length;

    return (
        <Link to={item.name}>
            <li className="item">
                <div>
                    <h3>{item.name}</h3>
                    <p>{description}</p>
                </div>
            </li>
        </Link>
    );
}

export default Category;