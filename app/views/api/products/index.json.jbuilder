json.by_id do
  @products.each do |product|
    json.set! product.id do 
      json.partial! "api/products/product", product: product
      if current_user
        json.currentUserUpvotedProducts current_user.upvoted_products
        json.currentUserUpvoted current_user.upvoted_products_by_id.include?(product.id)
      end
    end
  end
end

json.all_ids do
  json.array! @products.map { |product| product.id }
end