# json.extract! @product, :id, :name, :tagline, :link_url, :thumbnail_url, :gallery_url

json.extract! @all_data, :product_details

# json.product do
#   json.extract! @all_data[:product], :id, :name
# end

json.comments do
  json.by_id do
    @all_data[:comments].each do |comment|
      json.set! comment.id do 
        json.extract! comment, :id, :body
      end
    end
  end

  json.all_ids do
    json.array! @all_data[:comments].map { |comment| comment.id }
  end
end