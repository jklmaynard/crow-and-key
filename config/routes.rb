Rails.application.routes.draw do

  devise_for :users
  root to: 'application#angular'

  resources :books do
    resources :comments, :except => [:index, :new]

    resources :questions do
      resources :comments, :except => [:index, :new]
      member do
        put '/upvote' => 'questions#upvote'
      end
    end
  end
end
