import { useEffect, useState } from "react";
import getCategories from './firebase_handlers/getCategories';

function useItems() {
    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCategories().then((snapshot) => {
            const categories = snapshot.docs.map((doc) => {
                return {id: doc.id, ...doc.data()};
            });
            setCategories(categories);
            setLoading(false);
            setError(null);
        }).catch((err) => {
            setError(`An error occurred: ${err.message}`);
            setLoading(false);
        });
    }, []);

    return {categories, loading, error};
}

export default useItems;