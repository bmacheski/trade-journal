Rails.application.routes.draw do
  resources :pairs
  resources :platforms
  resources :tags do
    get :metrics, on: :collection
  end

  resources :trades do
    get :metrics, on: :collection
  end

  resources :setups do
    get :metrics, on: :collection
  end
end
