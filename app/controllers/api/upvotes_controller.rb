class Api::UpvotesController < ApplicationController
  def index
    @upvotes = Upvote.where(
                        user_id: params[:upvote][:user_id], 
                        upvoteable_type: params[:upvote][:upvoteable_type]
                        )
    if @upvotes
      render :index
    else
      render json: @upvotes.errors.full_messages, status: 404
    end
  end

  def show
    @upvote = Upvote.where(
                      user_id: params[:upvote][:user_id],
                      upvoteable_type: params[:upvote][:upvoteable_type],
                      upvotealbe_id: params[:upvote][:upvoteable_id]
                    )
    if @upvote
      render :show
    else
    
    end
  end
  
  def create
    @upvote = Upvote.new(upvote_params)
    @upvote.user_id = current_user.id
    if @upvote.save
      render :show
    else
      render json: @upvote.errors.full_messages, status: 404
    end
  end

  def destroy
    puts params
    @upvote = Upvote.find_by(
                        upvoteable_type: params[:upvote][:upvoteable_type],
                        upvoteable_id: params[:upvote][:upvoteable_id],
                        user_id: current_user.id
                        )

    if @upvote.destroy
      render :show
    else
      render json: ["couldn't delete upvote"], status: 422
    end
  end

  private
  
  def upvote_params
    params.require(:upvote).permit(:upvoteable_id, :upvoteable_type)
  end
end
