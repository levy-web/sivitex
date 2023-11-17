import { HeroBanner, CategoryBanner } from '@eccomerce/hero-banner'
/* eslint-disable-next-line */
export interface HomeProps {}

export const Home = (props: HomeProps) => {
  return (
    <div className=''>
      <HeroBanner/>
      <CategoryBanner/>
    </div>
  );
}