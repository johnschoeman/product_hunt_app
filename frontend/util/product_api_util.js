export const getAllProducts = () => (
  $.ajax({
    method: "GET",
    url: `api/products`
  })
);

export const getProduct = (productId) => (
  $.ajax({
    method: "GET",
    url: `api/products/${productId}`
  })
);

export const postProduct = (product) => {
  // console.log({product});
  return $.ajax({
    method: "POST",
    url: `api/products`,
    data: { product }
  });
};

export const postComment = (comment) => {
  return $.ajax({
    method: "POST",
    url: `api/comments`,
    data: { comment }
  });
};