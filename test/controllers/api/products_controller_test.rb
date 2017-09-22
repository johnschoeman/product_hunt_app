require 'test_helper'

class Api::ProductsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_products_create_url
    assert_response :success
  end

  test "should get index" do
    get api_products_index_url
    assert_response :success
  end

  test "should get show" do
    get api_products_show_url
    assert_response :success
  end

end
