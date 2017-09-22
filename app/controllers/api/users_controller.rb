class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(params[:id])

        if @user
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    def index
        @users = User.all
        render :index
    end



    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
