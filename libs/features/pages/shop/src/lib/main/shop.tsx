"use client"
import { useState } from 'react';
import { ProductComponent, ProductComponentProps } from '@eccomerce/card'
import { NormalButton, NormalButtonProps } from '@eccomerce/buttons';
/* eslint-disable-next-line */
export interface Products {
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
    {imgSrc: '/model3.png', price: 30, prodectName: 'product one'},
    {imgSrc: '/model2.png', price: 300, prodectName: 'product two'},
    {imgSrc: '/model3.png', price: 400, prodectName: 'product three'},
    {imgSrc: '/model4.png', price: 678, prodectName: 'product four'},
    {imgSrc: '/model3.png', price: 30, prodectName: 'product five'},
    {imgSrc: '/model2.png', price: 300, prodectName: 'product six'},
    {imgSrc: '/model3.png', price: 400, prodectName: 'product seven'},
    {imgSrc: '/model4.png', price: 678, prodectName: 'product eight'},
    {imgSrc: '/model3.png', price: 30, prodectName: 'product one'},
    {imgSrc: '/model2.png', price: 300, prodectName: 'product two'},
    {imgSrc: '/model3.png', price: 400, prodectName: 'product three'},
    {imgSrc: '/model4.png', price: 678, prodectName: 'product four'},
    {imgSrc: '/model3.png', price: 30, prodectName: 'product five'},
    {imgSrc: '/model2.png', price: 300, prodectName: 'product six'},
    {imgSrc: '/model3.png', price: 400, prodectName: 'product seven'},
    {imgSrc: '/model4.png', price: 678, prodectName: 'product eight'},
    {imgSrc: '/model3.png', price: 30, prodectName: 'product one'},
    {imgSrc: '/model2.png', price: 300, prodectName: 'product two'},
    {imgSrc: '/model3.png', price: 400, prodectName: 'product three'},
    {imgSrc: '/model4.png', price: 678, prodectName: 'product four'},
    {imgSrc: '/model3.png', price: 30, prodectName: 'product five'},
    {imgSrc: '/model2.png', price: 300, prodectName: 'product six'},
    {imgSrc: '/model3.png', price: 400, prodectName: 'product seven'},
    {imgSrc: '/model4.png', price: 678, prodectName: 'product eight'},
    {imgSrc: '/model3.png', price: 30, prodectName: 'product one'},
    {imgSrc: '/model2.png', price: 300, prodectName: 'product two'},
    {imgSrc: '/model3.png', price: 400, prodectName: 'product three'},
    {imgSrc: '/model4.png', price: 678, prodectName: 'product four'},
    {imgSrc: '/model3.png', price: 30, prodectName: 'product five'},
    {imgSrc: '/model2.png', price: 300, prodectName: 'product six'},
    {imgSrc: '/model3.png', price: 400, prodectName: 'product seven'},
    {imgSrc: '/model4.png', price: 678, prodectName: 'product eight'},
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
