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

  belongs_to :user

  belongs_to :product

  belongs_to :parent_comment,
    class_name: :Comment,
    foreign_key: :parent_comment_id,
    primary_key: :id,
    optional: true

  has_many :comments,
    class_name: :Comment,
    foreign_key: :parent_comment_id,
    primary_key: :id
end
