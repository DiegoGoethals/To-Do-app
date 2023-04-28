import { deleteDoc, doc, getDocs, collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"

function deleteCategory(id, name) {
    const colRef = collection(firestore, "to do lists");
    const docRef = doc(firestore, "categories", id);
    try {
        getDocs(colRef).then((querySnapshot) => {
            querySnapshot.forEach((document) => {
                if (document.data().category === name) {
                    const docRef = doc(firestore, "to do lists", document.id);
                    deleteDoc(docRef);
                }
            });
        }).then(() => {
            deleteDoc(docRef);
        });
    } catch(err) {
        console.log(err)
    }
}

export default deleteCategory;