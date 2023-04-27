import { collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
 
const getItems = (collectionToSearch) => {
    const items = collection(firestore, collectionToSearch);

    try {
        return items;
    } catch(err) {
        console.log(err);
    }
}
 
export default getItems;