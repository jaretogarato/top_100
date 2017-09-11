Rails.application.routes.draw do
  namespace :api do
    resources :items, except: [:new, :edit]
  end

  root

  get '*other', to: 'static#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
