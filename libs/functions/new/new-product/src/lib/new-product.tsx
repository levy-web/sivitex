import { db, storage } from "@eccomerce/firebase";
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';

// Define a type for your product data
type ProductData = {
  productName: string;
  productPrice: number;
  moreDetails: string;
  // Add more fields as needed
  imageUrl?: string; // Optional field for the image URL
};

export const addNewProduct = async (productData: ProductData, imageBase64?: string | undefined): Promise<string> => {
  try {
    // Save the image to Firebase Storage
    if (imageBase64) {
      const storageRef = ref(storage, 'images/' + Date.now()); // Change 'your_storage_reference'
      await uploadString(storageRef, imageBase64, 'data_url');
      productData.imageUrl = await getDownloadURL(storageRef);
    }

    // 'products' is the name of your collection
    const productsCollection = collection(db, 'products');
    
    // Add a new document with generated ID
    const newProductRef = await addDoc(productsCollection, productData);

    console.log('Product added with ID: ', newProductRef.id);

    return newProductRef.id; // Return the ID of the newly added product
  } catch (error) {
    console.error('Error adding product: ', error);
    throw error; // You might want to handle this error in your application
  }
};
