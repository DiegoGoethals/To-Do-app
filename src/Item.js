import './Item.css';

function Item(props) {
    const item = props.item;
    const totalItems = item.items.length;
    const doneItems = item.items.filter(item => item.done).length;

    return (
        <li className="item">
            <div>
                <h3>{item.type}</h3>
                <p>{doneItems}/{totalItems} done</p>
            </div>
        </li>
    );
}

export default Item;