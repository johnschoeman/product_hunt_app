Rails.application.routes.draw do
 # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :update]
    resource :session, only: [:create, :new, :destroy]
    resources :products, only: [:index, :show, :create]
    resources :comments, only: [:create, :update, :destroy]
  end


end
