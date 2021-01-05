Rails.application.routes.draw do
  resources :order_items
  resources :orders
  resources :reviews
  resources :shopping_cart_products
  resources :products
  resources :shopping_carts
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
