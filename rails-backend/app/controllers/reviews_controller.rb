class ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: reviews, except: [:created_at, :updated_at], include: [:user, :product]
    end

    def show
        review = Review.find_by(id: params[:id])
        if user
            render json: review.slice(:id, :content, :user_id, :product_id)
        else
            render json: { message: 'Item not found' }
        end
    end

    def create
        review = Review.new(review_params)
        review.save
        render json: review
    end

    def update
        review = Review.find_by(params[:id])
        review.update_attributes(review_params)
        render json: review
    end

    def destroy
        Review.destroy(params[:id])
    end

    private

    def review_params
        params.require(:review).permit(:id, :content, :user_id, :product_id)
    end
end
