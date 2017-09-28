json.allProductIds do
  json.array! @upvotes.map { |upvote| upvote.upvoteable_id }
end

json.allCommentIds []

json.byProductIds do
  @upvotes.each do |upvote|
    if upvote.upvoteable_type == "Product"
      json.set! upvote.upvoteable_id, upvote.id
    end
  end
end

json.byCommentIds do
  @upvotes.each do |upvote|
    if upvote.upvoteable_type == "Comment"
      json.set! upvote.upvoteable_id, upvote.id
    end
  end
end