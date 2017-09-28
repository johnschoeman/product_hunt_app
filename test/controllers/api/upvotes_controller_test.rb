require 'test_helper'

class Api::UpvotesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_upvotes_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_upvotes_destroy_url
    assert_response :success
  end

end
