class User < ApplicationRecord
    has_one :shopping_cart, dependent: :destroy
    has_many :orders
    has_many :reviews, dependent: :destroy
    has_many :products, through: :reviews
end
