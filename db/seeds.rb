# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.destroy_all
User.destroy_all
Comment.destroy_all

100.times do |i|
  p = Product.new
  p.name = Faker::Space.star_cluster
  p.tagline = Faker::Lovecraft.sentence(5,1)
  p.thumbnail_url = Faker::LoremPixel.image()
  p.link_url = Faker::Internet.url
  p.user_id = rand(1..10)

  if p.valid?
    p.save
  end
end


# user1 = User.create(username: 'khai', password: 'password')
# room1 = Room.create(room_name: 'cool room')
# user1.rooms << room1