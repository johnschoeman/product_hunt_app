export const RECEIVE_VIEWED_PRODUCT = "RECEIVE_VIEWED_PRODUCT";
export const RECEIVE_VIEWED_USER = "RECEIVE_VIEWED_USER";

export const receiveViewedProduct = (productId) => ({
  type: RECEIVE_VIEWED_PRODUCT,
  productId,
});

export const setViewedProduct = (productId) => (dispatch) => {
  dispatch(receiveViewedProduct(productId));
};

