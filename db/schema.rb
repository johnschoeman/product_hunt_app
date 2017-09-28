# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170928041536) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text "body", null: false
    t.integer "user_id", null: false
    t.integer "product_id", null: false
    t.integer "parent_comment_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_comments_on_product_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name", null: false
    t.string "tagline", null: false
    t.string "link_url", null: false
    t.string "thumbnail_url", null: false
    t.string "gallery_url"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_products_on_name", unique: true
  end

  create_table "upvotes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "upvoteable_id", null: false
    t.string "upvoteable_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["upvoteable_id", "upvoteable_type"], name: "index_upvotes_on_upvoteable_id_and_upvoteable_type"
    t.index ["user_id", "upvoteable_type", "upvoteable_id"], name: "index_upvotes_on_user_id_and_upvoteable_type_and_upvoteable_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "headline"
    t.string "email"
    t.string "image_url"
    t.string "website_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
    t.string "session_token", null: false
    t.string "userslug"
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
