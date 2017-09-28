json.by_id do
  @products.each do |product|
    json.set! product.id do 
      json.partial! "api/products/product", product: product
      if current_user
        json.currentUserUpvoted current_user.upvoted_products_cache.include?(product.id)
        # json.currentUserUpvoted current_user.upvoted_products.include?(product)
      end
    end
  end
end

json.all_ids do
  json.array! @products.map { |product| product.id }
end