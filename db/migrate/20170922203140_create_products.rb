class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.string :tagline, null: false
      t.string :link_url, null: false
      t.string :thumbnail_url, null: false
      t.string :gallery_url
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :products, :name, unique: true
  end
end
