import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    clearCart: (state) => {
      return { products: [], quantity: 0, total: 0 }; // Ensures Redux detects changes
    },
  },
});

export const { addProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
