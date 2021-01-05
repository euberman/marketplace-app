class User < ApplicationRecord
    has_many :shopping_carts, dependent: :destroy
    has_many :reviews, dependent: :destroy
    has_many :products, through: :reviews
end
