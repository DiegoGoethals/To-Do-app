import { getDocs, collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
 
const getCategories = () => {
    const categories = collection(firestore, "categories") // Firebase creates this automatically

    try {
        return getDocs(categories);
    } catch(err) {
        console.log(err);
    }
}
 
export default getCategories