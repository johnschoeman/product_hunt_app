export const RECEIVE_VIEWED_PRODUCT = "RECEIVE_VIEWED_PRODUCT";

export const receiveViewedProduct = (productId) => ({
  type: RECEIVE_VIEWED_PRODUCT,
  productId
});

export const setViewedProduct = (productId) => (dispatch) => {
  dispatch(receiveViewedProduct(productId));
};