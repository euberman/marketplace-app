class ShoppingCartsController < ApplicationController
    def index
        shopping_carts = ShoppingCart.all
        render json: shopping_carts, except: [:created_at, :updated_at], include: [:products]
    end

    def create
        shopping_cart = ShoppingCart.new(shopping_cart_params)
        shopping_cart.save
        # shopping_carts = ShoppingCart.all
        render json: shopping_cart#s, except: [:created_at, :updated_at], include: [:reviews]
    end

    def show
        shopping_cart = ShoppingCart.find_by(id: params[:id])
        if shopping_cart
            render json: product.slice(:id, :brand, :product_id, :department, :title, :description, :image_url, :customer_rating, :num_reviews, :in_stock, :price, :two_day_shipping_eligible, :store_id, :store_name)
        else
            render json: { message: 'Item not found' }
        end
    end

    private

    def shopping_cart_params
        params.require(:shopping_cart).permit(:user_id)
    end
end
