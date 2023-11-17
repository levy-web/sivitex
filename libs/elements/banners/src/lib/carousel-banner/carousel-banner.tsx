/* eslint-disable-next-line */
export interface CarouselBannerProps {}

export const CarouselBanner = (props: CarouselBannerProps) => {
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center md:h-screen">
      <div className='container mx-auto flex flex-col justify-center items-center'>
        <h1>Welcome to CarouselBanner!</h1>
      </div>
    </div>
  );
}