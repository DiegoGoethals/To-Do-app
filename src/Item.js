import './Item.css';

function Item(props) {
    const item = props.item;

    return (
        <li className="item">{ item }</li>
    );
}

export default Item;