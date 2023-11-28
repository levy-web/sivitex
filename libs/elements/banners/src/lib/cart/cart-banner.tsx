'use client'
import { CartItem, CartItemProps } from "@eccomerce/cart-item";
import { Checkout } from "@eccomerce/checkout";
import { useAppSelector } from "@eccomerce/slice";
import Link from "next/link";
/* eslint-disable-next-line */
export interface CartBannerProps {}

const EmptyCart = () => {
  return (
    <div className="container w-full">
      <div className="">
        <div className="justify-center h-80 items-center flex flex-col py-5 bg-gray-50 text-center">
          <h4 className="p-3 display-5 text-3xl">Your Cart is Empty</h4>
          <Link href="/shop" className="outline-pink-800 outline outline-offset-0 px-4 py-4">
            <i className="fa fa-arrow-left"></i> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export function CartBanner(props: CartBannerProps) {
  const CartData: CartItemProps[] = useAppSelector((state) => state.cartReducer.value.products)

  const CartItems = CartData.map((prod)=><CartItem {...prod}/>)


  return (
    <div className='min-h-screen justify-center items-center bg-gray-50'>
      <div className="min-h-screen items-center justify-center flex flex-col pt-14">
      {/* {CartData.length > 0 && (<p className="mb-2 text-gray-600 text-lg">Thanks for  shopping at sivitex.</p>)}
      {CartData.length > 0 && (<p className="mb-2 text-gray-600 text-lg text-center">We will contact you when your order is on the way.</p>)} */}
      <div className="container pt-4 mx-auto flex flex-col md:flex-row w-full">
      { CartData.length > 0 ? 
        (<div className="w-full md:w-2/3 min-h-80 md:mx-8 px-2">
          <h2 className="py-2 px-2 w-full bg-light">Cart Items</h2>
           {CartItems} 
        </div>) 
        : <EmptyCart/> }
        {CartData.length > 0 && (<div className="w-full md:w-1/3 h-full mt-4 md:mt-0 mb-4 bg-gray-200  rounded-xl items-center flex flex-col">
          <Checkout/>
        </div>)}
      </div>
      </div>
    </div>
  );
}

export default CartBanner;
