"use client"
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Products } from '@eccomerce/product-interface';
import { fetchDocument } from '@eccomerce/fetch-document';
import { addToCart } from "@eccomerce/slice"
import { AppDispatch } from '@eccomerce/slice'



/* eslint-disable-next-line */
export interface ProductBannerProps {  params: { productId:string }}

export const ProductBanner = (props: ProductBannerProps) =>  {
  const {
    params
  } = props;

  const [data, setData] = useState<Products | null>(null);
  const dispatch = useDispatch<AppDispatch>()

  useEffect(()=>{

    const fetchDoc = async () => {

      try{

        const response = await fetchDocument('products', params.productId)
        if (response instanceof Error) {
          // Handle error
          console.error(response.message);
        } else {
          // Assuming fetchDocument returns Products or null
          setData(response as Products | null);
        }

      }catch(error){
        console.error(error)

      }
    }
    fetchDoc();
  })
  
  return (
    <div className='flex justify-center items-center h-screen'>
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 gap-4'>
        <div className='h-full w-full justify-center items-center flex flex-col'>
          <img src={data?.imgSrc} alt={data?.prodectName} />
        </div>
        <div className='h-full w-full justify-center items-center flex flex-col'>
          <p>{data?.prodectName}</p>
          <p>{data?.price}</p>

          <div onClick={()=> dispatch(addToCart( data ?? {price:0, imgSrc:'', prodectName:'', id:''} ))} className='w-full bg-blue-800 text-white py-4 rounded-xl text-center cursor-pointer'>+ add to cart</div>
        </div>

      </div>
    </div>
    </div>
  );
}