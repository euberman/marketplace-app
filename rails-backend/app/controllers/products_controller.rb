class ProductsController < ApplicationController
    def index
        products = Product.all
        render json: products, except: [:created_at, :updated_at], include: [:shopping_carts, :reviews]
    end

    def show
        product = Product.find_by(id: params[:id])
        if product
            render json: product, except: [:created_at, :updated_at], include: [:reviews]
        else
            render json: { message: 'Item not found' }
        end
        
    end

    # def products_price_index
    #     products = Product.all
    #     new_products =  products.sort_by { |product| product[:price].to_i }

    #     render json: new_products, except: [:created_at, :updated_at, :description], include: [:shopping_carts, :reviews]
    # end

    def update
        product = Product.find(params[:id])
        product.update_attributes(product_params)
        render json: product
    end

    private

    def product_params
        params.require(:product).permit(:id, :brand, :product_id, :department, :title, :description, :image_url, :customer_rating, :num_reviews, :in_stock, :price, :two_day_shipping_eligible, :store_id, :store_name)
    end
end
