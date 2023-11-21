import { db } from '@eccomerce/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Products } from '@eccomerce/product-interface';

export const fetchProducts = async () => {
  try {
    const productsCollection = collection(db, 'products');
    const querySnapshot = await getDocs(productsCollection);

    const products:Products[] = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is an object representing the document data
      const productData = doc.data();
      products.push({ id: doc.id, imgSrc:productData.imageUrl, price:productData.productPrice, prodectName:productData.productName });
    });

    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // You might want to handle this error in your application
  }
};

