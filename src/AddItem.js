import './AddItem.css';

function AddItem(props) {
    const onSubmitHandler = props.onSubmitHandler;
    const [newItem, setNewItem] = props.newItem;
    const [description, setDescription] = props.description;

    return (
        <form onSubmit={onSubmitHandler}>
            <label>Category name</label>
            <input placeholder='Give your new category name here' type='text' 
                value={newItem} onChange={(e) => {
                    setNewItem(e.target.value);
                }} required>
            </input>
            <label>Category description</label>
            <input placeholder='Give your description here' type='text' 
                value={description} onChange={(e) => {
                    setDescription(e.target.value);
                }} required>
            </input>
            <button className='addCategory'>Add a new category with to do's</button>
        </form>
    );
}

export default AddItem;