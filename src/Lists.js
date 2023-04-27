import Loader from "./Loader";
import Itemlist from "./Categorylist";
import useItems from "./hooks/useItems";

function Lists(props) {
    const itemType = props.itemType;
    const {items, loading, error} = useItems(itemType);

    return (
        <div>
            {error && <p>{error}</p>}
            {loading && <Loader/>}
            {items && <Itemlist items={items} title={itemType}/>}
        </div>
    );
}

export default Lists;