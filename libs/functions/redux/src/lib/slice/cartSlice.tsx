import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "@eccomerce/product-interface";

interface CartProducts extends Products {
  quantity:number

}

type InitialState = {
  value: CartState
}

type CartState = {
  products:CartProducts[]
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

    addToCart: (state = initialState, action: PayloadAction<CartProducts>) => {
      // Check if product already in cart
      const exist = state.value.products.find((x) => x.id === action.payload.id);

      if (exist) {
        // Increase the quantity
        return {
          value: {
            products: state.value.products.map((x) =>
              x.id === action.payload.id ? { ...x, quantity: x.quantity + 1 } : x
            ),
          },
        };
      } else {
        return {
          value: {
            products: [...state.value.products, { ...action.payload, quantity: 1 }],
          },
        };
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