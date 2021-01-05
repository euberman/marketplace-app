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
end
