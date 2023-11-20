"use client"
import { useState } from 'react';
import { ProductComponent, ProductComponentProps } from '@eccomerce/card'
import { NormalButton, NormalButtonProps } from '@eccomerce/buttons';
/* eslint-disable-next-line */
export interface Products {
  id: number
  imgSrc: string
  price: number
  prodectName: string
} 

export interface ShopProps { }

export function Shop(props: ShopProps) {

  const [visibleProducts, setVisibleProducts] = useState(12);

  const loadMoreProducts = () => {
    // Increase the number of visible products when the "Load More" button is clicked
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
  };

  const products:Products[] = [
    {id:1, imgSrc: '/model3.png', price: 30, prodectName: 'product one'},
    {id:2, imgSrc: '/model2.png', price: 300, prodectName: 'product two'},
    {id:3, imgSrc: '/model3.png', price: 400, prodectName: 'product three'},
    {id:4, imgSrc: '/model4.png', price: 678, prodectName: 'product four'},
    {id:5, imgSrc: '/model3.png', price: 30, prodectName: 'product five'},
    {id:6, imgSrc: '/model2.png', price: 300, prodectName: 'product six'},
    {id:7, imgSrc: '/model3.png', price: 400, prodectName: 'product seven'},
    {id:8, imgSrc: '/model4.png', price: 678, prodectName: 'product eight'},
    {id:9, imgSrc: '/model3.png', price: 30, prodectName: 'product one'},
    {id:10, imgSrc: '/model2.png', price: 300, prodectName: 'product two'},
    {id:11, imgSrc: '/model3.png', price: 400, prodectName: 'product three'},
    {id:12, imgSrc: '/model4.png', price: 678, prodectName: 'product four'},
    {id:13, imgSrc: '/model3.png', price: 30, prodectName: 'product five'},
    {id:14, imgSrc: '/model2.png', price: 300, prodectName: 'product six'},
    {id:15, imgSrc: '/model3.png', price: 400, prodectName: 'product seven'},
    {id:16, imgSrc: '/model4.png', price: 678, prodectName: 'product eight'},
    {id:17, imgSrc: '/model3.png', price: 30, prodectName: 'product one'},
    {id:18, imgSrc: '/model2.png', price: 300, prodectName: 'product two'},
    {id:19, imgSrc: '/model3.png', price: 400, prodectName: 'product three'},
    {id:20, imgSrc: '/model4.png', price: 678, prodectName: 'product four'},
    {id:21, imgSrc: '/model3.png', price: 30, prodectName: 'product five'},
    {id:22, imgSrc: '/model2.png', price: 300, prodectName: 'product six'},
    {id:23, imgSrc: '/model3.png', price: 400, prodectName: 'product seven'},
    {id:24, imgSrc: '/model4.png', price: 678, prodectName: 'product eight'},
    {id:25, imgSrc: '/model3.png', price: 30, prodectName: 'product one'},
    {id:26, imgSrc: '/model2.png', price: 300, prodectName: 'product two'},
    {id:27, imgSrc: '/model3.png', price: 400, prodectName: 'product three'},
    {id:28, imgSrc: '/model4.png', price: 678, prodectName: 'product four'},
    {id:29, imgSrc: '/model3.png', price: 30, prodectName: 'product five'},
    {id:30, imgSrc: '/model2.png', price: 300, prodectName: 'product six'},
    {id:31, imgSrc: '/model3.png', price: 400, prodectName: 'product seven'},
    {id:32, imgSrc: '/model4.png', price: 678, prodectName: 'product eight'},
  ]

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
    <div className='bg-gray-100 py-12 flex flex-col justify-center items-center'>
    <div className='container mx-auto mb-8 pt-20 md:pt-24 grid grid-cols-1 md:grid-cols-3 md:gap-4'>
      {productsJsx}
    </div>
    {visibleProducts < products.length && (
        <NormalButton  {...buttonData}/>
      )}
    </div>
  );
}

export default Shop;
