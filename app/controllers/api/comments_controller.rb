class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
    @comment = Comment.find(params[:id])

    if @comment && @comment.user_id == current_user.id
      @comment.destroy
      render :show
    else
      render json: ["comment was not found or user is not owner of comment"]
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :parent_comment_id, :product_id)
  end
end
