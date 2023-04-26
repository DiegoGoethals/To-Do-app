import './Itemlist.css';
import Item from "./Item";

function Itemlist(props) {
    const items = props.items;
    const title = props.title;
    return (
        <div className="items">
            <h2>{title}</h2>
            <ul className="list">
                {items.map((item) => (
                    <Item key={item.id} item={item}/>
                ))}
            </ul>
        </div>
    );
}

export default Itemlist;