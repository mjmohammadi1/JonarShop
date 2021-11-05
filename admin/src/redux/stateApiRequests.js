import { loginFailure, loginStart, loginSuccess } from "./slices/user";
import { request } from "../components/utils/api";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./slices/product";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const result = await request.post("/auth/login", user);
    dispatch(loginSuccess(result.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const result = await request.get("/products");
    dispatch(getProductSuccess(result.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const result = await request.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const result = await request.post(`/products`, product);
    dispatch(addProductSuccess(result.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
