json.extract! @comment, :id, :body, :user_id, :product_id, :parent_comment_id
json.user do
  json.extract! @comment.user, :id, :image_url, :username, :headline
end