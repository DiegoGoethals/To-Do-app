import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"

function addCategory(category) {
    const categories = collection(firestore, "categories") // Firebase creates this automatically

    try {
        addDoc(categories, category);
    } catch(err) {
        console.log(err)
    }
}

export default addCategory;