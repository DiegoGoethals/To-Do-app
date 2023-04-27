import './Categorylist.css';
import ToDo from "./ToDo";

function ToDosList(props) {
    const items = props.items;
    const title = props.title;
    return (
        <div className='items'>
            <h2>{title}</h2>
            <ul className="list">
                {items.map((item, index) => (
                    <ToDo key={index} item={item}/>
                ))}
            </ul>
        </div>
    );
}

export default ToDosList;