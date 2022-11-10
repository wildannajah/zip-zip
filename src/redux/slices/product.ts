/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { ProductState, ResponseProducts } from '../../@types/product';
import axios from '../../utils/axios';
import { dispatch } from '../store';

const initialState: ProductState = {
  isLoading: false,
  error: null,
  products: [],
};

const slice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET PRODUCTS
    getProductsSuccess(state, action) {
      state.isLoading = false;
      state.products = action.payload;
    },
  },
});

export default slice.reducer;

// ----------------------------------------------------------------------

export function getProducts(data: { search: string | Blob }) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const formData = new FormData();
      formData.append('s', data.search);
      const response = (await axios({
        method: 'post',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })) as ResponseProducts;
      dispatch(slice.actions.getProductsSuccess(response.data.array));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
