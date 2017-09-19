class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :headline
      t.string :email
      t.string :image_url
      t.string :website_url

      t.timestamps
    end

    add_index :users, :username, unique: true
  end
end
