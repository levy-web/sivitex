import { Products } from '@eccomerce/product-interface';

/* eslint-disable-next-line */
export interface ProductBannerProps {  params: { productId: number }}

export const ProductBanner = (props: ProductBannerProps) =>  {
  const {
    params
  } = props;

  const products:Products[] = [
    {id:1, imgSrc: '/model3.png', price: 30, prodectName: 'Product one'},
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
  
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 gap-4'>
        <div className='h-full w-full justify-center items-center flex flex-col'>
          <img src={products[0].imgSrc} alt={products[0].prodectName} />
        </div>
        <div className='h-full w-full justify-center items-center flex flex-col'>
          <p>{products[0].prodectName}</p>
          <p>{products[0].price}</p>

          <div className='w-full bg-blue-800 text-white py-4 rounded-xl text-center cursor-pointer'>+ add to cart</div>
        </div>

      </div>
    </div>
    </div>
  );
}