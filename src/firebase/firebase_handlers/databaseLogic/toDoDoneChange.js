import { updateDoc, getDoc, doc } from "@firebase/firestore"
import { firestore } from "../../firebase_setup/firebase"

function toDoDoneChange(item, id) {
    const docRef = doc(firestore, "to do lists", id);
    try {
        return getDoc(docRef).then(doc => {
            const items = doc.data().items;
            const originalItemToChange = items.find((itemToChange) => itemToChange.todo === item.todo);
            const newItem = originalItemToChange;
            newItem.done = !newItem.done;
            items[items.indexOf(originalItemToChange)] = newItem;
            updateDoc(docRef, {
                items: items
            });
        });
    } catch(err) {
        console.log(err)
    }
}

export default toDoDoneChange;