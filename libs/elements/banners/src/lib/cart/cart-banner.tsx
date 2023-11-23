'use client'
import { CartItem, CartItemProps } from "@eccomerce/cart-item";
import { useAppSelector } from "@eccomerce/slice";
import Link from "next/link";
/* eslint-disable-next-line */
export interface CartBannerProps {}

const EmptyCart = () => {
  return (
    <div className="container">
      <div className="">
        <div className="col-md-12 h-80 justify-center items-center flex flex-col py-5 bg-gray-50 text-center">
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
    <div className='w-screen min-h-screen justify-center items-center bg-gray-100'>
      <div className="min-h-screen items-center flex flex-col pt-32">
      <p className="mb-2">Thanks for  shopping at sivitex.</p>
      <p className="mb-2">We will contact you when your order is on the way.</p>
      <div className="container bg-white pt-12 mx-auto flex flex-col md:flex-row w-full">
      { CartData.length > 0 ? (<div className="w-3/4 min-h-80 px-8">
           {CartItems} 
        </div>) : <EmptyCart/> }
        <div className="w-1/4 h-80 items-center flex flex-col">
          <h2 className="text-xl" >Checkout</h2>
        </div>
      </div>
      </div>
    </div>
  );
}

export default CartBanner;
