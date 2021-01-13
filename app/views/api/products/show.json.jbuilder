json.productDetails do
  json.merge! @product.attributes
  json.comments_count @product.comments_count
  json.upvotes_count @product.upvotes_count
  if current_user
    json.currentUserUpvoted current_user.upvoted_products_cache.include?(@product.id)
  end
end


json.comments do
  @product.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :parent_comment_id, :created_at
      json.upvotes_count comment.upvotes_count
      if current_user
        json.currentUserUpvoted current_user.upvoted_comments_cache.include?(comment.id)
      end
      json.user do
        json.extract! comment.user, :id, :image_url, :username, :headline
      end
    end
  end 
end

commentIds = @product.comments.map {|comment| comment.id}
json.commentIds commentIds
