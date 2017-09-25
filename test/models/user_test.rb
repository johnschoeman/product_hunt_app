# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  headline        :string
#  email           :string
#  image_url       :string
#  website_url     :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  password_digest :string
#  session_token   :string           not null
#  userslug        :string
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
