import { Products } from "@eccomerce/product-interface";

export interface CartProducts extends Products {
  quantity:number
}

export interface Checkout {

  products:CartProducts[]
  email:string
  phone:number
  town:string
  deliveryMeans:string,
  idNumber:number

}

export type CartState = {
  products:CartProducts[]
  checkout?:Checkout
}
