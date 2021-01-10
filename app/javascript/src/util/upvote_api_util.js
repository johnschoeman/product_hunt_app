export const postUpvote = (upvoteableType, upvoteableId) => {
  return $.ajax({
    method: 'POST',
    url: `api/upvotes`,
    data: { upvote: { upvoteable_type: upvoteableType,
                      upvoteable_id: upvoteableId } }
  });
};

export const deleteUpvote = (upvoteableType, upvoteableId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/upvotes/`,
    data: { upvote: { upvoteable_type: upvoteableType,
                      upvoteable_id: upvoteableId } }
  });
};

export const getUpvotes = (userId, upvoteableType) => {
  return $.ajax({
    method: "GET",
    url: `api/upvotes/`,
    data: { upvote: { user_id: userId,
                      upvoteable_type: upvoteableType } }
  });
};

export const getProductDetailUpvotes = (userId, productId) => {
  return $.ajax({
    method: "GET",
    url: `api/upvotes/`,
    data: { upvote: { user_id: userId,
                      product_id: productId } }
  });
};