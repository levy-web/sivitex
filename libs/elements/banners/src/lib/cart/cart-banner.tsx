'use client'
import { CartItem, CartItemProps } from "@eccomerce/cart-item";
import { useAppSelector } from "@eccomerce/slice";
/* eslint-disable-next-line */
export interface CartBannerProps {}

export function CartBanner(props: CartBannerProps) {
  const CartData: CartItemProps[] = useAppSelector((state) => state.cartReducer.value.products)

  const CartItems = CartData.map((prod)=><CartItem {...prod}/>)


  return (
    <div className='w-screen min-h-screen justify-center items-center flex bg-gray-100'>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full">
          {CartItems}
        </div>
        <div className="w-full items-center justify-center flex flex-col">
          <h2 className="text-xl" >Checkout</h2>
        </div>

      </div>
      
    </div>
  );
}

export default CartBanner;
