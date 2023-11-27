"use client"
import { CarouselComponent, CarouselComponentProps } from "@eccomerce/carousel";
import { fetchProducts } from "@eccomerce/fetch-products";
import { Products } from "@eccomerce/product-interface";
import { useEffect, useState } from "react";
/* eslint-disable-next-line */
export interface CarouselBannerProps {}

export const CarouselBanner = (props: CarouselBannerProps) => {

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

  const carouselComponentData: CarouselComponentProps = {
    images : products, 
    itemsPerPage:3,
    phoneItemsPerPage:1
  }
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center h-screen">
      <div className='container mx-auto flex flex-col justify-center items-center'>
        <h2 className="mb-12 text-4xl">Top Deals</h2>
        {loading ? <div> <h2>loading ... </h2></div> : <CarouselComponent {...carouselComponentData}/>}
      </div>
    </div>
  );
}