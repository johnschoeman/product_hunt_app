class Api::UpvotesController < ApplicationController
  def create
    @upvote = Upvote.new(upvote_params)
    if @upvote.save
      render :index
    else
      render json: @upvote.errors.full_messages
    end
  end

  def destroy
    @upvote = Upvote.find(params[:id])
    @upvote.destory if @upvote
  end

  private
  
  def upvote_params
    params.require(:upvote).permit(:user_id, :upvoteable_id, :upvoteable_type)
  end
end
