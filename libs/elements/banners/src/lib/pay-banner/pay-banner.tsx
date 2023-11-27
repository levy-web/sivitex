"use client"
import { PayCheckout } from "@eccomerce/pay-checkout";
import { useAppSelector } from "@eccomerce/slice";
import { Checkout as CheckoutdataInterface } from "@eccomerce/cart-interface";

/* eslint-disable-next-line */
export interface PayBannerProps {}

export function PayBanner(props: PayBannerProps) {
  const checkoutInfo: CheckoutdataInterface = useAppSelector((state) => state.cartReducer.value.checkout) || {  
    products:[],
    email:"",
    phone:0,
    town:"",
    deliveryMeans:"",
    idNumber:0
  }

  console.log(checkoutInfo)

  return (
    <div className='min-h-screen pt-28 bg-gray-50'>
      <PayCheckout />
    </div>
  );
}

export default PayBanner;
