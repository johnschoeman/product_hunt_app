json.extract! @comment, :id, :body, :user_id, :product_id, :parent_comment_id
json.user do
  json.extract! @comment.user, :id, :image_url, :username, :headline
end
json.current_user_upvoted @comment.current_user_upvoted?