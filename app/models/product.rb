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

  def self.filterByDate(date)
    
  end
  
  def self.byCreatedAtLimit(limit)
    Product.order(:created_at).last(limit).reverse
  end
end
