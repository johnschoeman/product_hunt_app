json.productDetails do
  json.merge! @product.attributes
end

json.comments do
  @product.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :parent_comment_id
      json.user do
        json.extract! comment.user, :id, :image_url, :username, :headline
      end
    end
  end 
end