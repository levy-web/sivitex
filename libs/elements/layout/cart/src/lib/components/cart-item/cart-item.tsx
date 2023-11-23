import { useDispatch } from "react-redux";
/* eslint-disable-next-line */
import { Products } from "@eccomerce/product-interface";
import { AppDispatch, removeFromCart } from "@eccomerce/slice"
export interface CartItemProps extends Products {quantity:number}

export const CartItem: React.FC<CartItemProps> = (props) => {
  const {
    id,
    prodectName,
    price,
    imgSrc,
    quantity

  } = props

  const dispatch = useDispatch<AppDispatch>()


  return (
    <div className='container flex flex-row items-center justify-center bg-gray-50 px-2 w-full mb-4 rounded-xl'>
      <div className="w-16 h-16">
        <img src={imgSrc} alt={prodectName} className=""/>
      </div>
      <div className="w-100 text-xl mx-auto">
        <p>{prodectName}</p>
      </div>
      <div className="w-100 flex flex-row text-lg px-4 ms-auto">
        <p className="mx-2 cursor-pointer"> - </p>
        <p className="mx-2">{`${quantity}`}</p>
        <p className="mx-2 cursor-pointer"> + </p>
      </div>
      <div className="w-100 text-lg px-4 ms-auto">
        <p>{`$ ${price * quantity}`}</p>
      </div>
      <div className="w-100 px-4">
        <button onClick={()=> dispatch(removeFromCart(id))} className="text-red-600">remove</button>
      </div>
    </div>
  );
}

export default CartItem;
