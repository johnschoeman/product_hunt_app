class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :require_login

  def login(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout
    user.reset_session_token!
    session[:session_token] = nil
  end

  def current_user
    user = User.find_by(session_token: session[:session_token])
    return user if user
  end

  def logged_in? 
    !!current_user
  end

  def require_login
    redirect_to root unless logged_in?
  end
end
