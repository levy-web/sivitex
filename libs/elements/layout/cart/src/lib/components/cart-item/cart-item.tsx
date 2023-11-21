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
    <div className='container flex flex-row items-center justify-center'>
      <div className="w-100">
        <img src={imgSrc} alt={prodectName} className="w-20 h-20"/>
      </div>
      <div className="w-100">
        <p>{prodectName}</p>
      </div>
      <div className="w-100">
        <p>$ {price}</p>
      </div>
      <div className="w-100">
        <button>delete</button>
      </div>
    </div>
  );
}

export default CartItem;
