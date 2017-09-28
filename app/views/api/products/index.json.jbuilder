json.by_id do
  @products.each do |product|
    json.set! product.id do 
      json.partial! "api/products/product", product: product
      json.currentUserUpvoted
    end
  end
end

json.all_ids do
  json.array! @products.map { |product| product.id }
end