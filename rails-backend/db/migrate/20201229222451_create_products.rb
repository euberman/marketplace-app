class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :brand
      t.string :product_id
      t.string :department
      t.string :title
      t.string :description
      t.string :image_url
      t.string :customer_rating
      t.integer :num_reviews
      t.boolean :in_stock
      t.string :price
      t.boolean :two_day_shipping_eligible
      t.string :store_id
      t.string :store_name

      t.timestamps
    end
  end
end
