/* eslint-disable-next-line */

export interface ProductItem {
  imgSrc: string
  price: number
  prodectName: string
}

export interface ProductComponentProps extends ProductItem {}

export const ProductComponent: React.FC<ProductComponentProps> = (props) => {

  const {
    price,
    imgSrc,
    prodectName

  } = props;

  return (
    <div className='container flex flex-col items-center justify-center'>
      <div className="h-72 w-full">
        <img src={imgSrc} alt="" className=""/>
      </div>

      <div className="cursor-pointer hover:text-pink-800 text-2xl">
        <p>{prodectName}</p>
      </div>

      <div>
        <p className="">ksh {price}</p>
      </div>

      
      
    </div>
  );
}

export default ProductComponent;
