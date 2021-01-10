json.extract! @upvote, :id, :upvoteable_type, :upvoteable_id

if @upvote.upvoteable_type == "Comment"
  json.upvoteable do
    json.id @upvote.upvoteable.id
    json.body @upvote.upvoteable.body
    json.userId @upvote.upvoteable.user_id
    json.productId @upvote.upvoteable.product_id
    json.parent_comment_id @upvote.upvoteable.parent_comment_id
  end
end
