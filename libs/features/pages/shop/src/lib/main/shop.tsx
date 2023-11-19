import { ProductComponent, ProductComponentProps } from '@eccomerce/card'
/* eslint-disable-next-line */
export interface Products {
  imgSrc: string
  price: number
  prodectName: string
} 

export interface ShopProps { }

export function Shop(props: ShopProps) {



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
  ]

  const productsJsx = products.map((prod) => {

    const productItem: ProductComponentProps = {
      prodectName: prod.prodectName,
      price: prod.price,
      imgSrc: prod.imgSrc

    }

    return (<ProductComponent {...productItem}/>)
  })



  return (
    <div className='bg-gray-100'>
    <div className='container mx-auto pt-20 md:pt-24 grid grid-cols-1 md:grid-cols-3 md:gap-4'>
      {productsJsx}
    </div>
    </div>
  );
}

export default Shop;
