import './Category.css';

function ToDo(props) {
    const item = props.item;

    return (
        <li className="item">
            <div>
                <h3>{item.todo}</h3>
                <h3>{item.done.toString()}</h3>
            </div>
         </li>
    )
}

export default ToDo;