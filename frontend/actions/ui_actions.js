export const RECEIVE_VIEWED_USER = "RECEIVE_VIEWED_USER";
export const RECEIVE_VIEWED_PRODUCT = "RECEIVE_VIEWED_PRODUCT";


export const receiveViewedUser = (userId) => ({
  type: RECEIVE_VIEWED_USER,
  userId
});

export const receiveViewedProduct = (productId) => ({
  type: RECEIVE_VIEWED_PRODUCT,
  productId
});

export const setViewedUser = (userId) => (dispatch) => {
  dispatch(receiveViewedUser(userId));
};

export const setViewedProduct = (productId) => (dispatch) => {
  dispatch(receiveViewedProduct(productId));
};