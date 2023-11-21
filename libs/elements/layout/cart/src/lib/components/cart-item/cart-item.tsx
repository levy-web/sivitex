/* eslint-disable-next-line */
import { Products } from "@eccomerce/product-interface";

export interface CartItemProps extends Products {}

export const CartItem: React.FC<CartItemProps> = (props) => {
  const {
    id,
    prodectName,
    price,
    imgSrc

  } = props

  return (
    <div className='container flex flex-row items-center justify-center w-full py-2 mb-4 rounded-xl'>
      <div className="w-100">
        <img src={imgSrc} alt={prodectName} className="w-full h-48"/>
      </div>
      <div className="w-100 text-3xl mx-auto">
        <p>{prodectName}</p>
      </div>
      <div className="w-100 text-2xl px-4 ms-auto">
        <p>$ {price}</p>
      </div>
      <div className="w-100 px-4">
        <button className="text-red-600">delete</button>
      </div>
      <hr className="text-white bg-white"/> 
    </div>
  );
}

export default CartItem;
