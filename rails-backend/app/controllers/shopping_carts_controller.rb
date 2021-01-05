class ShoppingCartsController < ApplicationController
    def index
        shopping_carts = ShoppingCart.all
        render json: shopping_carts, except: [:created_at, :updated_at], include: [:products]
    end

    def show
        shopping_cart = ShoppingCart.find_by(id: params[:id])
        if shopping_cart
            render json: shopping_cart.slice(:id, :brand, :product_id, :department, :title, :description, :image_url, :customer_rating, :num_reviews, :in_stock, :price, :two_day_shipping_eligible, :store_id, :store_name)
        else
            render json: { message: 'Item not found' }
        end
    end
end
