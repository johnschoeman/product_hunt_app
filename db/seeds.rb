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

main_user_images = [
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506710583/user_profile6_yi9s5b.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506710583/user_profile5_tghmqn.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506710583/user_profile4_ifumcz.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506710583/user_profile2_ugrsjt.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506710583/user_profile1_y8nbfe.jpg"
]

demo_user = User.new(username: "Product Hunt", password: "password")
demo_user.headline = "Founder & Designer, Product Hunt"
demo_user.image_url = main_user_images.sample

user1 = User.new(username: "Kate", password: "password")
user1.headline = "Community + Product @ Product Hunt"
user1.image_url = main_user_images.sample

user2 = User.new(username: "Alexey Sekachov", password: "password")
user2.headline = "Cofounder & Head of Product @drop-box"
user2.image_url = main_user_images.sample

user3 = User.new(username: "Samuel Goudie", password: "password")
user3.headline = "Product Programme Manager"
user3.image_url = main_user_images.sample

demo_user.save
user1.save
user2.save
user3.save

usernames = [
  "Steven Diffey",
  "Alexander Lange",
  "John Todd",
  "Ben Tossell",
  "Zach Segal",
  "Natalia Kharchenko",
  "Lisa Dziuba",
  "Meng To",
  "Muege Cevik",
  "Dana Loberg",
  "Muhammet Dilek",
  "Beth Summers",
  "Victoria Coleman",
  "Pascal Claisse",
  "Thiago de Carvalho",
  "Racheal Bossanova",
  "Dmitry Kaigorodov",
  "Bryan Helmkamp",
  "Yvonne",
  "Niv Dror",
  "Braxton Huff"
]

user_headlines = [
  "Developer || Traveler || Entrepreneur",
  "CoFouner, Surreal",
  "Founder and CEO, Lean On",
  "I build products and companies",
  "Web Designer at Squareflair",
  "Co-Founder, Sidekix",
  "Product / Technology @ Whire",
  "Co-founder of Graphcool",
  "Founder @ Laylo",
  "President & CEO, CyberBytes Inc.",
  "Growth/Product Marketer",
  "CEO, Toby",
  "full-stack web developer",
  "Commercial Design Lead, MailOnline",
  "CTO @ digidesk - media solutions",
  "CEO, Code Climate",
  "Android Developer @ Undabot",
  "ceo/founder, www.kuoll.com",
  "Sr. Software Engineer at Fearlex Group",
  "Creator of Unsplash",
  "internet words",
  "making ideas happen at feathrd",
  "Space, Tech, Nutrition, Fitness",
  "Words @ProductHunt & @AngelList",
  "Bay Area Made"
]

user_images = [
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506710179/Mike_Brinkman_2_opuawp.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506710179/Jose_Moreno_1_a9fkfw.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506710180/John_Schoeman_2_lm7zkl.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506710210/Tyler_Wood_1_oboxvb.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506710329/Rachel_Jacobson_1_icxloh.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506710583/Thomas_Kilmer_1_m7h4dk.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506710583/Alexander_Happ_1_mhhdev.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506710873/Peter_Ludlum_2_t6faat.jpg",
  "https://res.cloudinary.com/console/media_library#/dialog/image/upload/Eric_Tung_2_sl6orr.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506711275/Adrian_Jewell_1_x7bzwr.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506711401/elliot_uwno7c.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506711452/aaron_zxa3hx.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506711787/Brian_Sohn_1_w1plny.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506713308/Michael_Quint_2_rdk6jo.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506713804/Harsh_Kumar_2_otoh4l.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506713804/Porfirio_Matias_1_frjr2a.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506714702/Chu_-David-_Jang_2_wlldxy.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506714702/Andrew_Ansel_1_fwm761.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506717980/Justin_Shieh_1_b2oyut.jpg"
]

50.times do |i|
  u = User.new
  u.username = usernames.sample
  u.password = "password"
  u.headline = user_headlines.sample
  u.image_url = user_images.sample
  u.save
end

users = User.all

product_images = [
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506705947/bendmentors_ppnqoy.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506705947/mixboard_ace5zg.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506705946/captioned_kf4clp.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506705946/placenote_dxrdav.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506705946/trailer_g0caus.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506705946/kannatopia_l1u4o0.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506705946/koder_bonderies_ofs9dw.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506705946/humbot_cweubk.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506722092/653d6d6d-00b3-4f3c-9219-cc8ed9f4ac0c_f2aavb.png",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506722093/21c19882-37f6-4f95-b10d-1231b2051a41_eh1eze.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506722093/3c9ffc01-11fd-40b8-8a36-dc3406f6fbb3_zo7jrm.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506722093/80b8508a-64b8-490a-ac40-c36df383c549_oafm7y.gif",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506722093/c4479feb-f591-4111-90b2-9e650f9a8355_smszgc.png",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506722093/1d2d11c4-ced6-4f40-96c5-a2ccea450f67_avyvtw.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506722094/a3242a9a-3ae5-47f4-8037-0f51e0cfdc62_wnfodf.gif",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506722094/1fad0f8f-e269-4d5f-8125-892aa47f6046_mwfhdy.gif",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506723290/patch_r2mi9v.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506723291/tic-tac-toe-slack_vlaasc.gif",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506723290/iWall_dhdw2f.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506723290/Burst_tkancc.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506723290/ghost_it_nbb5qs.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506723514/yc_world_od4ww4.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506723514/asana_lvdobi.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506723514/you_team_tjxsmq.gif",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506723515/shopcodes_ohdsg6.gif",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506723514/dark_room3_ros4ue.png",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506723515/game_of_coins_bzwkzc.jpg",
  "https://res.cloudinary.com/dekgrddbo/image/upload/v1506723515/on_deck_e5eyub.jpg"

]

30.times do |i|
  p = Product.new
  p.name = Faker::App.name
  p.tagline = Faker::Lorem.sentence(3, false, 3)
  p.thumbnail_url = product_images.sample
  p.link_url = Faker::Internet.url
  p.user = users.sample
  if p.valid?
    p.save
  end
end

product10 = Product.new(name: "Pi Charging")
product10.tagline = "The world's first contactless, wireless charger."
product10.link_url = "ipicharging.com"
product10.thumbnail_url = "https://res.cloudinary.com/dekgrddbo/image/upload/v1506721898/pi_charging_lqw2qg.gif"
product10.user = users.sample
product10.save

product9 = Product.new(name: "Live Chat for Sales by Intercom")
product9.tagline = "The quickest way to get more qualified leads"
product9.link_url = "intercom.com/live-chat"
product9.thumbnail_url = "https://res.cloudinary.com/dekgrddbo/image/upload/v1506721637/intercom_vu1drz.gif"
product9.user = users.sample
product9.save

product8 = Product.new(name: "Notion for iOS")
product8.tagline = "A collaborative editor for notes, tasks, and wikis"
product8.link_url = "notion.so/mobile"
product8.thumbnail_url = "https://res.cloudinary.com/dekgrddbo/image/upload/v1506721492/notion_rmy18g.jpg"
product8.user = users.sample
product8.save

product7 = Product.new(name: "How to grow like Dropbox")
product7.tagline = "Build a Dropbox-style referral with this useful tool"
product7.link_url = "dropboxreferralprogram.com"
product7.thumbnail_url = "https://res.cloudinary.com/dekgrddbo/image/upload/v1506721376/dropbox_yxdify.gif"
product7.user = users.sample
product7.save

product6 = Product.new(name: "wits.io")
product6.tagline = "Weekly book summaries recommended by founders and makers"
product6.link_url = "https://wits.io"
product6.thumbnail_url = "https://res.cloudinary.com/dekgrddbo/image/upload/v1506721237/wits-io_r8fdma.png"
product6.user = users.sample
product6.save

product4 = Product.new(name: "How to Build a Career in Tech, by Product Hunt")
product4.tagline = "A toolkit for makers to ship awesome products"
product4.link_url = "https://books.producthunt.com/careers"
product4.thumbnail_url = "https://res.cloudinary.com/dekgrddbo/image/upload/v1506720972/build_a_career_in_tech_gf3dvv.jpg"
product4.user = users.sample
product4.save

product5 = Product.new(name: "Pod")
product5.tagline = "Pod helps you manage your people, not just your schedule"
product5.link_url = "https://pod.io/blog/introducing-pod.html"
product5.thumbnail_url = "https://res.cloudinary.com/dekgrddbo/image/upload/v1506721097/pod_mdam3o.gif"
product5.user = users.sample
product5.save

product1 = Product.new(name: "Sublime Text 3.0")
product1.tagline = "The long awaited version 3 of the popular code editor"
product1.link_url = "https://sublimetext.com/3"
product1.thumbnail_url = "https://res.cloudinary.com/dekgrddbo/image/upload/v1506705160/sublime_thumbnail_vwvpqr.jpg"
product1.user = user1
product1.save

product2 = Product.new(name: "iPhone X")
product2.tagline = "Apple's most advanced iPhone yet with a 5.8\" OLED display"
product2.link_url = "https://apple.com/iphone-x"
product2.thumbnail_url = "https://res.cloudinary.com/dekgrddbo/image/upload/v1506705160/iphoneX_thumbnail_y1crfd.jpg"
product2.user = user2
product2.save

product3 = Product.new(name: "Ship by Product Hunt")
product3.tagline = "A toolkit for makers to ship awesome products"
product3.link_url = "https://producthunt.com/ship"
product3.thumbnail_url = "https://res.cloudinary.com/dekgrddbo/image/upload/v1506705160/shipbyproducthunt_thumbnail_qllk2q.jpg"
product3.user = user3
product3.save


products = Product.all

200.times do

  parent_comment = Comment.new
  parent_comment.body = Faker::Lorem.paragraph(3, true, 6)
  parent_comment.user = users.sample
  parent_comment.product = products.sample

  if parent_comment.save
    num = [0,1,2,3].sample
    num.times do
      child_comment = Comment.new
      child_comment.body = Faker::Lorem.paragraph(1, true, 6)
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

500.times do 
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

20.times do 
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