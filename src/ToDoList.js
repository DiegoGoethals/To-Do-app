import ListsItem from './ListsItem';
import './ToDoList.css';

function ToDoList(props) {
    const items = props.items;
    const title = props.title;
    return (
        <div className='items'>
            <h2>{title}</h2>
            <ul className="list">
                {items.map((item) => (
                    <ListsItem key={item.id} item={item}/>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;