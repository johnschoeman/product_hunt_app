json.product do
  json.merge! @product.attributes
end

json.comments do

  json.by_id do
    @product.comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :body, :parent_comment_id
      end
    end 
  end

  json.all_ids do
    json.array! @product.comments.map { |comment| comment.id }
  end
end