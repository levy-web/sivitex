import Link from 'next/link'
import { Products } from '@eccomerce/product-interface';
/* eslint-disable-next-line */

export interface ProductComponentProps extends Products {}

export const ProductComponent: React.FC<ProductComponentProps> = (props) => {

  const {
    id,
    price,
    imgSrc,
    prodectName

  } = props;

  return (
    <div className='container bg-gray-50 w-full shadow-inner flex flex-col items-center justify-center'>
      <div className="h-62 md:h-72 w-full justify-center flex items-center">
        <img src={imgSrc} alt="" className="w-72 h-48  rounded-lg"/>
      </div>

      <div className="cursor-pointer hover:text-pink-800 text-xs">
        <Link href={`/shop/product/${id}`}><p>{prodectName}</p></Link>
      </div>

      <div>
        <p className="">ksh {price}</p>
      </div>      
      
    </div>
  );
}

export default ProductComponent;
