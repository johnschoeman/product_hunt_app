# == Schema Information
#
# Table name: comments
#
#  id                :integer          not null, primary key
#  body              :text             not null
#  user_id           :integer          not null
#  product_id        :integer          not null
#  parent_comment_id :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, presence: true
  validate :parent_comment_is_top_level

  belongs_to :user

  belongs_to :product

  belongs_to :parent_comment,
    class_name: :Comment,
    foreign_key: :parent_comment_id,
    primary_key: :id,
    optional: true

  has_many :child_comments,
    class_name: :Comment,
    foreign_key: :parent_comment_id,
    primary_key: :id

  has_many :upvotes, as: :upvoteable

  def parent_comment_is_top_level
    if parent_comment && parent_comment.parent_comment_id != nil
      errors.add(:parent_comment_id, "Can't have deeply nested comments")
    end
  end

  def current_user_upvoted?
    self.upvotes.any? { |upvote| upvote.user_id == current_user.id }
  end
end
