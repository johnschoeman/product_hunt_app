class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :require_login

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout
    user.reset_session_token!
    session[:session_token] = nil
    @user = nil
  end

  def current_user
    return nil unless session[:session_token]
    @user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in? 
    !!current_user
  end

  def require_login
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end
end
