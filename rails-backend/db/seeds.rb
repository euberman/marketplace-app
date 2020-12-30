# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://walmart.p.rapidapi.com/products/list?cat_id=0&pref_store=2648%2C5434%2C2031%2C2280%2C5426&sort=best_seller&page=1&zipcode=94066")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["x-rapidapi-key"] = '4c56e34434mshb05b44857d9af7bp12ac07jsnc8378f9b70ea'
request["x-rapidapi-host"] = 'walmart.p.rapidapi.com'

response = http.request(request)
res1 = JSON.parse response.read_body
res1["items"].each{|product| Product.create(brand: product["brand"][0], product_id: product["productId"], department: product["department"], title: product["title"], description: product["description"], image_url: product["imageUrl"], customer_rating: product["customerRating"], num_reviews: product["numReviews"], in_stock: product["inventory"]["availableOnline"], price: product["primaryOffer"]["offerPrice"], two_day_shipping_eligible: product["twoDayShippingEligible"], store_id: product["sellerId"], store_name: product["sellerName"])}

# puts response.read_body


# def products
#     response1 = RestClient.get 'https://walmart.p.rapidapi.com/products/list?cat_id=0&pref_store=2648%2C5434%2C2031%2C2280%2C5426&sort=best_seller&page=1&zipcode=94066'
#     json1 = JSON.parse response1

#     puts json1
#     byebug

#     # if !json1.nil?
#     #     json1[]
#     # else
#     # end
# end

# products