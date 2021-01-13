json.extract! @comment, :id, :body, :user_id, :product_id, :parent_comment_id
json.currentUserUpvoted current_user.upvoted_comments_cache.include?(@comment.id)
json.user do
  json.extract! @comment.user, :id, :image_url, :username, :headline
end
