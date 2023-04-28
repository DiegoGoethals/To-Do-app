import { deleteDoc, doc } from "@firebase/firestore"
import { firestore } from "../../../firebase_setup/firebase"

function deleteList(id) {
    const docRef = doc(firestore, "to do lists", id);
    try {
        return deleteDoc(docRef);
    } catch(err) {
        console.log(err)
    }
}

export default deleteList;