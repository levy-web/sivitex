import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "@eccomerce/product-interface";

type InitialState = {
  value: CartState
}

type CartState = {
  products:Products[]
}

const initialState = {
  value: {
    products: []
  } as CartState
} as InitialState

export const cart = createSlice({
  name:'cart',
  initialState,
  reducers: {
    clearCart: ()=> {
      return initialState;
    }, 

    addToCart: (state=initialState, action:PayloadAction<Products>) => {
      return {
        value: {
          products: [...state.value.products, action.payload]
  
        }
      }

    },

    removeFromCart: (state=initialState, action:PayloadAction<string>)=> {
      return {
        value: {
          products: state.value.products.filter((prod)=> prod.id != action.payload)
        }
      }

    }
  }

});

export const cartReducer = cart.reducer 

export const { clearCart, addToCart, removeFromCart } = cart.actions