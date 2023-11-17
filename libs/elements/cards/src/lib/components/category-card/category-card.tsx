import { CategoryCard as CategoryCardInterface } from "@eccomerce/category-card";
/* eslint-disable-next-line */
export interface CategoryCardProps extends CategoryCardInterface {}

export const CategoryCard: React.FC<CategoryCardProps> = (props) => {

  const {
    title,
    imgSrc,
    avalilableNumber
  } = props;

  return (
    <div className='bg-gray-50 h-full rounded-lg'>
      <img src={imgSrc} alt="" className="h-full rounded-lg w-full"/>
      <div>
        <p className="text-xl text-center cursor-pointer">{title}({avalilableNumber})</p>
      </div>
    </div>
  );
}