import { useAppSelector } from "@eccomerce/slice";
import { CartProducts, Checkout as CheckoutdataInterface } from "@eccomerce/cart-interface";
import PayItem from "./pay-itme/pay-item";
import { NormalButton, NormalButtonProps } from "@eccomerce/buttons";
/* eslint-disable-next-line */
export interface PayCheckoutProps {}

export const PayCheckout = (props: PayCheckoutProps) => {
  const checkoutInfo: CheckoutdataInterface = useAppSelector((state) => state.cartReducer.value.checkout) || {  
    products:[],
    email:"",
    phone:0,
    town:"",
    deliveryMeans:"",
    idNumber:0
  }

  const buttonData: NormalButtonProps = {
    text: "Lipa na mpesa",
    bgColor: 'bg-green-800',
    color: 'text-white',
    hoverBgColor: 'hover:bg-gray-500',
    hoverColor: 'hover:text-white',
    buttonClick: ()=> {}
  }

  const totalCart = (products: CartProducts[]) => {
    let sum:number = 0
    for(let i=0; i<products.length; i++){
      console.log(products[i])
      sum += parseInt(`${products[i].price * products[i].quantity}`);
    }
    return sum
  }

  const CartItems = checkoutInfo.products.map((prod)=><PayItem {...prod}/>)


  return (
      <div className="min-h-screen bg-gray-50 items-center flex flex-col pt-4">
        <div className="container pt-4 mx-auto flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2 min-h-80 md:mx-8">
            <h2 className="text-2xl px-2 py-4 text-gray-600">Products</h2>
              {CartItems} 
          </div>
          <div className="w-full md:w-1/2 min-h-80 py-8 md:mx-8 flex flex-col items-center justify-center">
            <h1 className="text-2xl px-2 py-4 text-gray-600">phone: {checkoutInfo.phone}</h1>
            <h1 className="text-2xl px-2 py-4 text-gray-600">Id Number: {checkoutInfo.idNumber}</h1>
            <h1 className="text-2xl px-2 py-4 text-gray-600">To: {checkoutInfo.town} </h1>
            <h1 className="text-2xl px-2 py-4 text-gray-600">Delivery means: {checkoutInfo.deliveryMeans}</h1>
            <h1 className="text-2xl px-2 py-4 text-gray-600">Total Amount: {totalCart(checkoutInfo.products)}</h1>
            <NormalButton {...buttonData}/>
          </div>
        </div>
        
      </div>
  );
}

export default PayCheckout;
