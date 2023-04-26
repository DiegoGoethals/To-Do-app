import { getDocs, collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
 
const getItems = () => {
    const categories = collection(firestore, "categories") // Firebase creates this automatically

    try {
        return getDocs(categories);
    } catch(err) {
        console.log(err);
    }
}
 
export default getItems;