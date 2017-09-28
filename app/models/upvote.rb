# == Schema Information
#
# Table name: upvotes
#
#  id              :integer          not null, primary key
#  user_id         :integer          not null
#  upvoteable_id   :integer          not null
#  upvoteable_type :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Upvote < ApplicationRecord
  validates :upvoteable_type, inclusion: {in: ["Product", "Comment"], 
                              message: "Can only upvote products and comments"}

  belongs_to :upvoteable, polymorphic: true

  belongs_to :user
end
