class Api::SearchController < ApplicationController

  def omnisearch
    @users_by_name = User.where("LOWER(username) LIKE ?", "%#{params[:query].downcase}%").limit(5)
    @products_by_name = Product.where("LOWER(name) LIKE ?", "%#{params[:query].downcase}%").limit(5)

    @searchResults = {
      userResults: @users_by_name,
      productResults: @products_by_name
    }

    render :index
  end
end
