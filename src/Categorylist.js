import './Categorylist.css';
import Category from './Category';

function CategoryList(props) {
    const items = props.items;
    const title = props.title;
    return (
        <div className="items">
            <h2>{title}</h2>
            <ul className="list">
                {items.map((item) => (
                    <Category key={item.id} item={item}/>
                ))}
            </ul>
        </div>
    );
}

export default CategoryList;