import * as APIUtil from '../util/product_api_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_PRODUCT_ERRORS = 'RECEIVE_PRODUCT_ERRORS';
export const RECEIVE_PRODUCT_COMMENTS = 'RECEIVE_PRODUCT_COMMENTS';

export const receiveAllProducts = (products) => ({
  type: RECEIVE_ALL_PRODUCTS,
  products
});

export const receiveProduct = (data) => ({
  type: RECEIVE_PRODUCT,
  data
});

export const receiveProductErrors = errors => ({
  type: RECEIVE_PRODUCT_ERRORS,
  errors
});

export const receiveProductComments = (comments) => ({
  type: RECEIVE_PRODUCT_COMMENTS,
  comments
});

export const createProduct = product => dispatch => {
  return APIUtil.postProduct(product).then(res => (
    dispatch(receiveProduct(res))
  ), err => (
    dispatch(receiveProductErrors(err.responseJSON))
  ));
};

export const fetchProduct = productId => dispatch => (
  APIUtil.getProduct(productId).then(res => (
    dispatch(receiveProduct(res))
  ), err => (
    dispatch(receiveProductErrors(err.responseJSON))
  ))
);

export const fetchAllProducts = () => dispatch => (
  APIUtil.getAllProducts().then(res => (
    dispatch(receiveAllProducts(res))
  ), err => (
    dispatch(receiveProductErrors(err.responseJSON))
  ))
);