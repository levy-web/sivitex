import { db, } from "@eccomerce/firebase";
import { getDoc, doc } from "firebase/firestore";

export const fetchDocument = async (collection:string, documentId:string) => {
  try {
    const documentRef = doc(db, collection, documentId);
    const documentSnapShot = await getDoc(documentRef);

    if(documentSnapShot.exists()){
      return documentSnapShot.data();
    }else {
      return null
    }

  }catch(error) {
    // Instead of returning null, return the error
    return error;
  }

}
