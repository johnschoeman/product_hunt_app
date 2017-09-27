json.products do
  json.by_id do
    @products_by_name.each do |product|
      json.set! product.id do 
        json.partial! "api/products/product", product: product
      end
    end
  end

  json.all_ids do
    json.array! @products_by_name.map { |product| product.id }
  end
end


json.users do
  json.by_id do
    @users_by_name.each do |user|
      json.set! user.id do
        json.partial! "api/users/user", user: user
      end
    end
  end

  json.all_ids do
    json.array! @users_by_name.map { |user| user.id }
  end
end