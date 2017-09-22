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

export const postProduct = (product) => (
  $.ajax({
    method: "POST",
    url: `api/products/new`,
    data: { product }
  })
);