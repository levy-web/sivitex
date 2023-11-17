import { NormalButton, NormalButtonProps, } from '@eccomerce/buttons';
import { CategoryCard, CategoryCardProps } from '@eccomerce/card'
/* eslint-disable-next-line */
export interface CategoryBannerProps {}

export const CategoryBanner = (props: CategoryBannerProps) => {
  const bagCategoryCardData: CategoryCardProps = {
    title:"Bags",
    imgSrc:"https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avalilableNumber:5
  }

  const glassesCategoryCardData: CategoryCardProps = {
    title:"Glasses",
    imgSrc:"https://images.unsplash.com/photo-1582142407894-ec85a1260a46?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avalilableNumber:35
  }

  const shoesCategoryCardData: CategoryCardProps = {
    title:"Shoes",
    imgSrc:"https://plus.unsplash.com/premium_photo-1661780575509-c454ba1f88fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avalilableNumber:500
  }

  const dressCategoryCardData: CategoryCardProps = {
    title:"Dresses",
    imgSrc:"https://images.unsplash.com/photo-1472746729193-36ad213ac4a5?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avalilableNumber:50
  }

  const buttonData:NormalButtonProps = {
    text: "Shop now",
    bgColor: 'bg-pink-800',
    color: 'text-white',
    hoverBgColor: 'hover:bg-gray-500',
    hoverColor: 'hover:text-white',
  }

  return (
    <div className='bg-gray-100 flex flex-col justify-center items-center md:h-screen'>
      <div className='container mx-auto flex flex-col justify-center items-center'>
      <h1 className='text-4xl mb-12'>Categories</h1>
      <div className='grid md:grid-cols-4 gap-4 mb-12'>
        <CategoryCard {...dressCategoryCardData}/>
        <CategoryCard {...bagCategoryCardData}/>
        <CategoryCard {...glassesCategoryCardData}/>
        <CategoryCard {...shoesCategoryCardData}/>
      </div>
      <NormalButton {...buttonData}/>
      </div>
    </div>
  );
}