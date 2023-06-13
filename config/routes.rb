Rails.application.routes.draw do
  root 'root#index'
 namespace :api do
  namespace :v1 do
    resources :greetings
  end
end
  
end