import { getDocs, collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
 
const getItems = (collectionToSearch) => {
    const items = collection(firestore, collectionToSearch) // Firebase creates this automatically

    try {
        return getDocs(items);
    } catch(err) {
        console.log(err);
    }
}
 
export default getItems;