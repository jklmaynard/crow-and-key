Rails.application.routes.draw do

  root :to => 'application#index'

  resources :books do
    resources :comments, :except => [:index, :new]
    resources :questions do
      resources :comments, :except => [:index, :new]
    end
  end
end
