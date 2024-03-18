import { createSlice } from "@reduxjs/toolkit";

export const GlobalStatesSlice = createSlice({
  name: "GlobalStatesSlice",
  initialState: {
    favouritesProducts: [],
    cartProducts: [],
    products: [],
    formDetails: null,
    userProfileDetails: null,
    orderProduct: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },

    addFavProducts: (state, action) => {
      const existingIndex = state.favouritesProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex === -1) {
        state.favouritesProducts = [
          ...state.favouritesProducts,
          action.payload,
        ];
      }
    },

    addCartProducts: (state, action) => {
      const cartExistingIndex = state.cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (cartExistingIndex === -1) {
        state.cartProducts = [...state.cartProducts, action.payload];
      }
    },

    removeCartProduct: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
    },

    removeFavProduct: (state, action) => {
      state.favouritesProducts = state.favouritesProducts.filter(
        (product) => product.id !== action.payload
      );
    },

    orderProductReducer: (state, action) => {
      state.orderProduct = action.payload;
    },

    formDetailsReducer: (state, action) => {
      state.formDetails = action.payload;
    },

    userProfileDetailsReducer: (state, action) => {
      state.userProfileDetails = action.payload;
    },
  },
});

export const {
  getProducts,
  addFavProducts,
  addCartProducts,
  removeCartProduct,
  removeFavProduct,
  formDetailsReducer,
  userProfileDetailsReducer,
  orderProductReducer,
} = GlobalStatesSlice.actions;

export const GlobalStatesData = (state) => state.parentReducer;
export default GlobalStatesSlice.reducer;
