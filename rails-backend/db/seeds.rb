# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Note: Do not ever rails db:drop!!! These requests don't work very well when run all together for some reason, so if you db:drop, you need to run each of these individually inside the rails console.

ariel = User.create(username: "ArielVG", password: "1234")
eric = User.create(username: "euberman", password: "1234")

require 'uri'
require 'net/http'
require 'openssl'

all_products = []

url = URI("https://walmart.p.rapidapi.com/products/list?cat_id=0&pref_store=2648%2C5434%2C2031%2C2280%2C5426&sort=best_seller&page=1&zipcode=94066")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["x-rapidapi-key"] = '4c56e34434mshb05b44857d9af7bp12ac07jsnc8378f9b70ea'
request["x-rapidapi-host"] = 'walmart.p.rapidapi.com'

response = http.request(request)
res = JSON.parse response.read_body
res["items"].each{|p| all_products.push(p)}
all_products.length


url1 = URI("https://walmart.p.rapidapi.com/products/list?cat_id=0&pref_store=5959%2C3640%2C4526%2C3584%2C2066&sort=price_low&page=3&zipcode=77008")

http1 = Net::HTTP.new(url1.host, url1.port)
http1.use_ssl = true
http1.verify_mode = OpenSSL::SSL::VERIFY_NONE

request1 = Net::HTTP::Get.new(url1)
request1["x-rapidapi-key"] = '4c56e34434mshb05b44857d9af7bp12ac07jsnc8378f9b70ea'
request1["x-rapidapi-host"] = 'walmart.p.rapidapi.com'

response1 = http1.request(request1)
res1 = JSON.parse response1.read_body
res1["items"].each{|p| all_products.push(p)}
all_products.length


url2 = URI("https://walmart.p.rapidapi.com/products/list?cat_id=0&pref_store=2955%sort=new&page=1&zipcode=64030")

http2 = Net::HTTP.new(url2.host, url2.port)
http2.use_ssl = true
http2.verify_mode = OpenSSL::SSL::VERIFY_NONE

request2 = Net::HTTP::Get.new(url2)
request2["x-rapidapi-key"] = '4c56e34434mshb05b44857d9af7bp12ac07jsnc8378f9b70ea'
request2["x-rapidapi-host"] = 'walmart.p.rapidapi.com'

response2 = http2.request(request2)
res2 = JSON.parse response2.read_body
res2["items"].each{|p| all_products.push(p)}
all_products.length


url3 = URI("https://walmart.p.rapidapi.com/products/list?cat_id=0&pref_store=573&sort=price_high&page=3&zipcode=64030")

http3 = Net::HTTP.new(url3.host, url3.port)
http3.use_ssl = true
http3.verify_mode = OpenSSL::SSL::VERIFY_NONE

request3 = Net::HTTP::Get.new(url3)
request3["x-rapidapi-key"] = '4c56e34434mshb05b44857d9af7bp12ac07jsnc8378f9b70ea'
request3["x-rapidapi-host"] = 'walmart.p.rapidapi.com'

response3 = http3.request(request3)
res3 = JSON.parse response3.read_body
res3["items"].each{|p| all_products.push(p)}
all_products.length


url4 = URI("https://walmart.p.rapidapi.com/products/list?cat_id=0&pref_store=2516&sort=rating_high&page=1&zipcode=98101")

http4 = Net::HTTP.new(url4.host, url4.port)
http4.use_ssl = true
http4.verify_mode = OpenSSL::SSL::VERIFY_NONE

request4 = Net::HTTP::Get.new(url4)
request4["x-rapidapi-key"] = '4c56e34434mshb05b44857d9af7bp12ac07jsnc8378f9b70ea'
request4["x-rapidapi-host"] = 'walmart.p.rapidapi.com'

response4 = http4.request(request4)
res4 = JSON.parse response4.read_body
res4["items"].each{|p| all_products.push(p)}
all_products.length


url5 = URI("https://walmart.p.rapidapi.com/products/list?cat_id=0&pref_store=2325&sort=rating_high&page=1&zipcode=98101")

http5 = Net::HTTP.new(url5.host, url5.port)
http5.use_ssl = true
http5.verify_mode = OpenSSL::SSL::VERIFY_NONE

request5 = Net::HTTP::Get.new(url5)
request5["x-rapidapi-key"] = '4c56e34434mshb05b44857d9af7bp12ac07jsnc8378f9b70ea'
request5["x-rapidapi-host"] = 'walmart.p.rapidapi.com'

response5 = http5.request(request5)
res5 = JSON.parse response5.read_body
res5["items"].each{|p| all_products.push(p)}
all_products.length


url9 = URI("https://walmart.p.rapidapi.com/products/list?cat_id=0&pref_store=5426&sort=new&page=1&zipcode=94066")

http9 = Net::HTTP.new(url9.host, url9.port)
http9.use_ssl = true
http7.verify_mode = OpenSSL::SSL::VERIFY_NONE

request9 = Net::HTTP::Get.new(url9)
request9["x-rapidapi-key"] = '4c56e34434mshb05b44857d9af7bp12ac07jsnc8378f9b70ea'
request9["x-rapidapi-host"] = 'walmart.p.rapidapi.com'

response9 = http9.request(request9)
res9 = JSON.parse response9.read_body
res9["items"].each{|p| all_products.push(p)}
all_products.length


all_products.each do |product|
    same_id = Product.all.select{|p| p[:product_id] == product["productId"]}
    if same_id.length == 0
        Product.create(brand: product["brand"][0], product_id: product["productId"], department: product["department"], title: product["title"], description: product["description"], image_url: product["imageUrl"], customer_rating: product["customerRating"], num_reviews: product["numReviews"], in_stock: product["inventory"]["availableOnline"], price: product["primaryOffer"]["offerPrice"], two_day_shipping_eligible: product["twoDayShippingEligible"], store_id: product["sellerId"], store_name: product["sellerName"])
    end
end