class UsersController < ApplicationController
    def index
        users = User.all
        render json: users, except: [:created_at, :updated_at], include: [:reviews, :shopping_carts]
    end

    def show
        user = User.find_by(id: params[:id])
        if user
            render json: user.slice(:id, :email, :password)
        else
            render json: { message: 'Item not found' }
        end
    end

    def create
        user = User.new(user_params)
        user.save
        shop1 = ShoppingCart.new(user_id: user[:id])
        shop1.save
        puts user.shopping_carts.shopping_cart_products
        # users = User.all
        render json: user#s, except: [:created_at, :updated_at], include: [:reviews]
    end

    def update
        user = User.find(params[:id])
        user.update_attributes(user_params)
        render json: user
    end

    def destroy
        # @user = User.find_by(id: params[:id])
        # @user.destroy
        User.destroy(params[:id])
    end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end
end
