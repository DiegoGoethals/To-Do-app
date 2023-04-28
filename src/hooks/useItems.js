import { useEffect, useState } from "react";
import getItems from "../firebase/firebase_handlers/databaseLogic/getItems";
import { onSnapshot } from "@firebase/firestore";
import { auth } from "../firebase/firebase_setup/firebase";

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
            }).filter((item) => {
                if (auth.currentUser === null) {
                    setLoading(false);
                    return false;
                }
                return item.user === auth.currentUser.uid;
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