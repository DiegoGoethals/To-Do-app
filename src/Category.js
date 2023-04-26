import './Category.css';

function Category(props) {
    const category = props.category;

    return (
        <li className="category">{ category }</li>
    );
}

export default Category;