import { db, } from "@eccomerce/firebase";
import { Products } from "@eccomerce/product-interface";
import { getDoc, doc } from "firebase/firestore";

export const fetchDocument = async (collection:string, documentId:string) => {
  try {
    const documentRef = doc(db, collection, documentId);
    const documentSnapShot = await getDoc(documentRef);

    if(documentSnapShot.exists()){
      const data:Products = {
        id:documentId,
        price:documentSnapShot.data().productPrice,
        prodectName:documentSnapShot.data().productName,
        imgSrc: documentSnapShot.data().imageUrl

      }
      return data;
    }else {
      return null
    }

  }catch(error) {
      // Instead of returning null, return the error
      return error;
  }

}
