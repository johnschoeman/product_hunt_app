class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(username: params[:user][:username], password: params[:user][:password])

    if @user
      login(@user)
    else
      render json: ['Invalid Username or Password']
    end
  end

  def destroy
    logout
  end
end
