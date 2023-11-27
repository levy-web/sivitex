import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, Checkout, CartProducts } from '@eccomerce/cart-interface'


type InitialState = {
  value: CartState
}


const initialState = {
  value: {
    products: [],
    checkout:{
      products:[],
      phone:0,
      email:"",
      town:"",
      deliveryMeans:"",
      idNumber:0
    }

  } as CartState
} as InitialState

export const cart = createSlice({
  name:'cart',
  initialState,
  reducers: {
    clearCart: ()=> {
      return initialState;
    }, 

    addToCart: (state = initialState, action: PayloadAction<CartProducts>) => {
      // Check if product already in cart
      const exist = state.value.products.find((x) => x.id === action.payload.id);

      if (exist) {
        // Increase the quantity
        return {
          value: {
            ...state.value,
            products: state.value.products.map((x) =>
              x.id === action.payload.id ? { ...x, quantity: x.quantity + 1 } : x
            ),
          },
        };
      } else {
        return {
          value: {
            ...state.value,
            products: [...state.value.products, { ...action.payload, quantity: 1 }],
          },
        };
      }
    },

    removeFromCart: (state=initialState, action:PayloadAction<string>)=> {
      return {
        value: {
          ...state.value,
          products: state.value.products.filter((prod)=> prod.id != action.payload)
        }
      }

    },
    checkoutPay: (state=initialState, action:PayloadAction<Checkout>) => {
      return {
        value: {
          ...state.value,
          checkout: action.payload
        }
      }

    }
  }

});

export const cartReducer = cart.reducer 

export const { clearCart, addToCart, removeFromCart, checkoutPay } = cart.actions