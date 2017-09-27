class Api::SearchController < ApplicationController

  def omnisearch
    @users_by_name = User.where("LOWER(username) LIKE ?", "%#{params[:query].downcase}%")
    @products_by_name = Product.where("LOWER(name) LIKE ?", "%#{params[:query].downcase}%")

    render json: [@users_by_name, @products_by_name]
  end
end
