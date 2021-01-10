export const RECEIVE_CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveClearErrors = () => ({
  type: RECEIVE_CLEAR_ERRORS,
  errors: []
});

export const clearErrors = () => dispatch => (
  () => dispatch(receiveClearErrors())
);