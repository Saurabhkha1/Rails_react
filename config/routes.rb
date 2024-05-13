Rails.application.routes.draw do
  root 'home#login'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get 'login', to: "home#login"
  get 'signup', to: "home#signup"
  get 'welcome', to: "home#welcome"

  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }
  post '/referrals', to: 'referrals#create'
  # post '/referrals/send_email', to: 'referrals#send_email'
end
