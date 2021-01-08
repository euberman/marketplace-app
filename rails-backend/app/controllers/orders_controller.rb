class OrdersController < ApplicationController
    def index
        orders = Order.all
        render json: orders, except: [:updated_at], include: [:products, :user]
    end

    def show
        order = Order.find_by(id: params[:id])
        if order
            render json: order, include: [:products]
        else
            render json: { message: 'Item not found' }
        end
    end

    def create
        order = Order.new(order_params)
        order.save
        # shop1 = ShoppingCart.new(order_id: order[:id])
        # shop1.save
        # puts order.shopping_cart.shopping_cart_products
        # orders = User.all
        render json: order#s, except: [:created_at, :updated_at], include: [:reviews]
    end

    # def update
    #     user = User.find(params[:id])
    #     user.update_attributes(user_params)
    #     render json: user
    # end

    private

    def order_params
        params.require(:order).permit(:user_id, :payment, :address, :shipped)
    end
end
