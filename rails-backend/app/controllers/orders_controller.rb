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
        order = Order.create(order_params)
        render json: order
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
