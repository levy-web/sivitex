import { CartProducts } from "@eccomerce/cart-interface";
/* eslint-disable-next-line */
export interface PayItemProps extends CartProducts  {}

export const PayItem: React.FC<PayItemProps> = (props) => {
  const {
    prodectName,
    price,
    imgSrc,
    quantity

  } = props

  return (
    <div className='container flex flex-row items-center justify-center bg-gray-50 px-2 w-full mb-4 rounded-xl'>
      <div className="w-full h-full">
        <img src={imgSrc} alt={prodectName} className=""/>
      </div>
      <div className="w-full hidden md:block text-xl mx-auto">
        <p>{prodectName}</p>
      </div>
      <div className="w-full flex flex-row text-lg px-4 py-2 ms-auto justify-center items-center">
        <p className="">{`${quantity}`}</p>
      </div>
      <div className="w-full text-lg px-4 ms-auto">
        <p>{`ksh ${price * quantity}`}</p>
      </div>
    </div>
  );
}

export default PayItem;
