# == Schema Information
#
# Table name: products
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  tagline       :string           not null
#  link_url      :string           not null
#  thumbnail_url :string           not null
#  gallery_url   :string
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Product < ApplicationRecord
  validates :tagline, :link_url, :thumbnail_url, presence: true
  validates :name, presence: true, uniqueness: true

  belongs_to :user

  has_many :comments

  has_many :upvotes, as: :upvoteable

  def current_user_upvoted=(bool)
    self.current_user_upvoted = bool
  end

  def self.byCreatedAtLimit(limit)
    Product.order(:created_at).last(limit).reverse
  end

  def current_user_upvoted?
    self.upvotes.any? { |upvote| upvote.user_id == current_user.id }
  end
end
