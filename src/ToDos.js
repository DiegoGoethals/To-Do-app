import './Categorylist.css';

function ToDos() {
    return (
        <div className="items">
            <h2>To Do List</h2>
            <ul className="list">
                <li className="item">
                    <div>
                        <h3>Item 1</h3>
                        <p>Item 1 description</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ToDos;