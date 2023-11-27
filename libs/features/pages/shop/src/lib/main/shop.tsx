"use client"
import { useState, useEffect } from 'react';
import { ProductComponent, ProductComponentProps } from '@eccomerce/card'
import { NormalButton, NormalButtonProps } from '@eccomerce/buttons';
import { fetchProducts } from '@eccomerce/fetch-products';
/* eslint-disable-next-line */
import { Products } from '@eccomerce/product-interface';

export interface ShopProps { }

export function Shop(props: ShopProps) {

  const [visibleProducts, setVisibleProducts] = useState(12);
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
        setLoading(false)
      } catch (error) {
        // Handle error, e.g., show an error message to the user
        setLoading(false)
        console.error('Error fetching products:', error);
      }
    };

    fetchData(); // Invoke the fetch function when the component mounts
  }, []);

  const loadMoreProducts = () => {
    // Increase the number of visible products when the "Load More" button is clicked
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
  };

  const buttonData:NormalButtonProps = {
    text: `Load (${products.length - visibleProducts}) More ...`,
    bgColor: 'bg-pink-800',
    color: 'text-white',
    hoverBgColor: 'hover:bg-gray-500',
    hoverColor: 'hover:text-white',
    buttonClick: ()=> {loadMoreProducts()}
  }

  const productsJsx = products.slice(0, visibleProducts).map((prod) => {

    const productItem: ProductComponentProps = {
      id: prod.id,
      prodectName: prod.prodectName,
      price: prod.price,
      imgSrc: prod.imgSrc

    }

    return (<ProductComponent {...productItem}/>)
  })



  return (
    <div className='bg-gray-100 min-h-screen py-12 flex flex-col justify-center items-center'>
    {!loading ? (<div className='container mx-auto mb-8 pt-20 md:pt-24 grid grid-cols-1 md:grid-cols-3 md:gap-4'>
      { productsJsx }
    </div>) : (<div><p>loading ...</p></div>)}
    {visibleProducts < products.length && (
        <NormalButton  {...buttonData}/>
      )}
    </div>
  );
}

export default Shop;
