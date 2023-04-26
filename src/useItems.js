import { useEffect, useState } from "react";
import getItems from './firebase_handlers/getItems';

function useItems() {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getItems().then((snapshot) => {
            const items = snapshot.docs.map((doc) => {
                return {id: doc.id, ...doc.data()};
            });
            setItems(items);
            setLoading(false);
            setError(null);
        }).catch((err) => {
            setError(`An error occurred: ${err.message}`);
            setLoading(false);
        });
    }, []);

    return {items, loading, error};
}

export default useItems;