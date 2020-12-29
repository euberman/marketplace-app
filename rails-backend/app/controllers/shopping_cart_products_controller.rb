class ShoppingCartProductsController < ApplicationController
    def index
        shopping_cart_products = ShoppingCartProduct.all
        render json: shopping_cart_products, except: [:created_at, :updated_at]
    end

    def show
        shopping_cart_product = ShoppingCartProduct.find_by(id: params[:id])
        if shopping_cart_product
            render json: product.slice(:id, :shopping_cart_id, :product_id)
        else
            render json: { message: 'Item not found' }
        end
    end

    def create
        shopping_cart_product = ShoppingCartProduct.new(shopping_cart_product_params)
        shopping_cart_product.save
        render json: shopping_cart_product
    end

    # def edit
    # end

    def update
        shopping_cart_product = ShoppingCartProduct.find_by(params[:id])
        shopping_cart_product.update_attributes(shopping_cart_product_params)
        render json: shopping_cart_product
    end

    def destroy
        ShoppingCartProduct.destroy(params[:id])
    end

    private

    def shopping_cart_product_params
        params.require(:shopping_cart_product).permit(:id, :shopping_cart_id, :product_id)
    end
end
