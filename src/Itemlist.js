import './Itemlist.css';
import Item from "./Item";

function Itemlist(props) {
    const items = props.items;
    const title = props.title;
    return (
        <div className="items">
            <h2>{title}</h2>
            <ul className="categories">
                {items.map((item, index) => (
                    <Item key={index} item={item}/>
                ))}
            </ul>
        </div>
    );
}

export default Itemlist;