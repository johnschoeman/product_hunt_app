Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :update]
    resource :session, only: [:create, :new, :destroy]
    resources :products, only: [:index, :show, :create]
    resources :comments, only: [:create, :update, :destroy]
    resources :upvotes, only: [:index, :show, :create]
    delete '/upvotes', to: 'upvotes#destroy'
    get '/omnisearch', to: 'search#omnisearch'
  end
end
