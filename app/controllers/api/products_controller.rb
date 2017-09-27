class Api::ProductsController < ApplicationController
  def create
    @product = Product.new(product_params)
    @product.user = current_user
    if @product.save
      render :show
    elsif @product.user.nil?
      render json: ["Must be logged in to create a product"], status: 422
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def index
    @products = Product.includes(:comments).byCreatedAtLimit(20)
    render :index
  end

  def show
    @product = Product.includes(:comments).order('comments.created_at DESC').includes(:user).find(params[:id])
    if @product
      render :show 
    else
      render json: @product.errors.full_messages, status: 404
    end
  end

  private
  
  def product_params
    params.require(:product).permit(:name, :tagline, :link_url, :thumbnail_url, :gallery_url)
  end
end