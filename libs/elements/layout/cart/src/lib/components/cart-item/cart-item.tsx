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
    <div className='container border-b-2 flex flex-col md:flex-row items-center justify-center bg-white px-1 w-full mb-4 rounded-xl'>
      <p onClick={()=> dispatch(removeFromCart(id))} className="ms-auto md:hidden text-3xl text-red-600 mr-4">x</p>
      <div className="w-full h-full">
        <img src={imgSrc} alt={prodectName} className=""/>
      </div>
      <div className="w-full text-xl text-center mx-auto">
        <p>{prodectName}</p>
      </div>
      <div className="w-full flex flex-row text-lg px-2 py-2 ms-auto justify-center items-center">
        <p className="mx-2 cursor-pointer bg-gray-200 px-3 py-1"> - </p>
        <p className="mx-2">{`${quantity}`}</p>
        <p className="mx-2 cursor-pointer bg-gray-200 px-3 py-1"> + </p>
      </div>
      <div className="w-full text-lg text-center px-2 ms-auto">
        <p>{`ksh ${price * quantity}`}</p>
      </div>
      <div className="w-full hidden md:block text-center pl-2">
        <button onClick={()=> dispatch(removeFromCart(id))} className="text-red-600">remove</button>
      </div>
    </div>
  );
}

export default CartItem;
