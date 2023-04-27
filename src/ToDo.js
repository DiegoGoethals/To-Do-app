import './Category.css';

function ToDo(props) {
    const item = props.item;
    let done = <i class="fa-solid fa-circle-xmark" style={{"color": "#d60000"}}></i>
    if (item.done) {
        done = <i class="fa-sharp fa-solid fa-circle-check" style={{"color": "#47e006"}}></i>;
    }

    return (
        <li className="item">
            <div>
                <h3>{done} {item.todo}</h3>
                <i class="fa-solid fa-trash-can" style={{"color": "#7c7e83"}}></i>
            </div>
         </li>
    )
}

export default ToDo;