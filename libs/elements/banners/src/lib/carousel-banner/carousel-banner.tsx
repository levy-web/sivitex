import { CarouselComponent, CarouselComponentProps } from "@eccomerce/carousel";
/* eslint-disable-next-line */
export interface CarouselBannerProps {}

export const CarouselBanner = (props: CarouselBannerProps) => {
  const carouselComponentData: CarouselComponentProps = {
    images : [
    '/model.png',
    '/model3.png',
    '/model2.png',
    '/model4.png',
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