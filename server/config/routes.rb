Rails.application.routes.draw do
  resources :trades do
    get :metrics, on: :collection
    get :setup_metrics, on: :collection
  end
  resources :pairs
  resources :setups
end
