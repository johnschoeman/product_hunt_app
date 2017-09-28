# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all
Comment.destroy_all
Upvote.destroy_all

demo_user = User.new(username: "product_hunt_demo", password: "password")
demo_user.headline = "This is a headline"
demo_user.image_url = "https://res.cloudinary.com/dekgrddbo/image/upload/v1506459017/180_c80zku.png"

user1 = User.new(username: "Finn The Human", password: "password")
user1.headline = "niiiiice"
user1.image_url = "https://res.cloudinary.com/dekgrddbo/image/upload/v1506267278/finn_the_human_bokynk.jpg"

user2 = User.new(username: "Jake The Dog", password: "password")
user2.headline = "wut."
user2.image_url = "https://res.cloudinary.com/dekgrddbo/image/upload/v1506306926/adventure-time-tshirt-jake-the-dog-face_s6ux9r.jpg"

user3 = User.new(username: "Princess Bubblegum", password: "password")
user3.headline = "It's science!"
user3.image_url = "https://res.cloudinary.com/dekgrddbo/image/upload/v1506458676/images_hzpbup.jpg"

demo_user.save
user1.save
user2.save
user3.save

product1 = Product.new(name: "Grass Sword")
product1.tagline = "It's grass!"
product1.link_url = Faker::Internet.url
product1.thumbnail_url = Faker::LoremPixel.image()
product1.user = user1
product1.save

20.times do |i|
  u = User.new
  u.username = Faker::App.author
  u.password = "password"
  u.headline = Faker::App.name
  u.image_url = Faker::LoremPixel.image()
  u.save
end


users = User.all

50.times do |i|
  p = Product.new
  p.name = Faker::Space.star_cluster
  p.tagline = Faker::Lorem.sentence(3)
  p.thumbnail_url = Faker::LoremPixel.image()
  p.link_url = Faker::Internet.url
  p.user = users.sample
  if p.valid?
    p.save
  end
end

products = Product.all

100.times do

  parent_comment = Comment.new
  parent_comment.body = Faker::RickAndMorty.quote
  parent_comment.user = users.sample
  parent_comment.product = products.sample

  if parent_comment.save
    num = [0,1,2,3].sample
    num.times do
      child_comment = Comment.new
      child_comment.body = Faker::RickAndMorty.quote
      child_comment.user = users.sample
      child_comment.parent_comment = parent_comment
      child_comment.product = parent_comment.product
      if child_comment.valid?
        child_comment.save
      end
    end
  end
end

comments = Comment.all

100.times do 
  v = Upvote.new
  v.user = users.sample
  v.upvoteable_type = "Product"
  v.upvoteable_id = products.sample.id

  if v.valid? && !v.upvote_exists?
    v.save!
  end
end

1000.times do
  v = Upvote.new
  v.user = users.sample
  v.upvoteable_type = "Comment"
  v.upvoteable_id = comments.sample.id

  if v.valid? && !v.upvote_exists?
    v.save!
  end
end

50.times do 
  v = Upvote.new
  v.user = demo_user
  v.upvoteable_type = "Product"
  v.upvoteable_id = products.sample.id

  if v.valid? && !v.upvote_exists?
    v.save!
  end
end



# user1 = User.create(username: 'khai', password: 'password')
# room1 = Room.create(room_name: 'cool room')
# user1.rooms << room1