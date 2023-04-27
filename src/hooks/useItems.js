import { useEffect, useState } from "react";
import getItems from "../firebase/firebase_handlers/getItems";
import { onSnapshot } from "@firebase/firestore";

function useItems(itemType) {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        try {
            onSnapshot(getItems(itemType), (snapshot) => {
            const items = snapshot.docs.map((doc) => {
                return {id: doc.id, ...doc.data()};
            });
            setItems(items);
            setLoading(false);
            setError(null);
        });
        } catch(err) {
            setError(`An error occurred: ${err.message}`);
            setLoading(false);
        }
    }, [itemType]);

    return {items, loading, error};
}

export default useItems;