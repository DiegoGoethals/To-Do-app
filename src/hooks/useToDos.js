import { useEffect, useState, useMemo } from "react";
import { doc, onSnapshot } from "@firebase/firestore";
import { auth, firestore } from "../firebase/firebase_setup/firebase";

function useToDos(id) {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const docRef = useMemo(() => doc(firestore, "to do lists", id), [id]);

    useEffect(() => {
        setLoading(true);
        setError(null);
        try {
            onSnapshot(docRef, (snapshot) => {
                if (auth.currentUser.uid !== snapshot.data().user) {
                    setError("You do not have permission to view this list.");
                    setLoading(false);
                    return false;
                }
                const items = snapshot.data().items;
                setItems(items);
                setLoading(false);
                setError(null);
            });
        } catch(err) {
            setError(`An error occurred: ${err.message}`);
            setLoading(false);
        }
    }, [docRef]);

    return {items, loading, error};
}

export default useToDos;