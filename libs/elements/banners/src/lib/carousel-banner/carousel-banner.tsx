import { CarouselComponent, CarouselComponentProps } from "@eccomerce/carousel";
/* eslint-disable-next-line */
export interface CarouselBannerProps {}

export const CarouselBanner = (props: CarouselBannerProps) => {
  const carouselComponentData: CarouselComponentProps = {
    images : [
    {imgSrc: '/model3.png', price: 30, name: 'product one'},
    {imgSrc: '/model2.png', price: 300, name: 'product two'},
    {imgSrc: '/model3.png', price: 400, name: 'product three'},
    {imgSrc: '/model4.png', price: 678, name: 'product four'},
  ], 
  itemsPerPage:3,
  phoneItemsPerPage:1
}
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center h-screen">
      <div className='container mx-auto flex flex-col justify-center items-center'>
        <h2 className="mb-12 text-4xl">Top Deals</h2>
        <CarouselComponent {...carouselComponentData}/>
      </div>
    </div>
  );
}