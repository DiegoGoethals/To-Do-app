import { updateDoc, getDoc, doc } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"

function deleteToDo(todo, id) {
    const docRef = doc(firestore, "to do lists", id);
    try {
        return getDoc(docRef).then(doc => {
            const items = doc.data().items.filter((i) => i.todo !== todo);
            updateDoc(docRef, {
                items: items
            });
        });
    } catch(err) {
        console.log(err)
    }
}

export default deleteToDo;