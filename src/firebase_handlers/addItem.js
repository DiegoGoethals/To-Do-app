import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"

function addItem(item, CollectionToAddTo) {
    const items = collection(firestore, CollectionToAddTo);

    try {
        return addDoc(items, item);
    } catch(err) {
        console.log(err)
    }
}

export default addItem;