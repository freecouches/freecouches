Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root to: "application#index"
  # root "articles#index"

  # TODO: remove dis
  get '/test_email', to: 'application#test_email'
end
