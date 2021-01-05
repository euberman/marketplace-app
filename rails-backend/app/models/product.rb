class Product < ApplicationRecord
    has_many :shopping_cart_products
    has_many :shopping_carts, through: :shopping_cart_products
    has_many :order_items
    has_many :orders, through: :order_items
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews
end
