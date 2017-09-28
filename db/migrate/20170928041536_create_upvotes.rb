class CreateUpvotes < ActiveRecord::Migration[5.1]
  def change
    create_table :upvotes do |t|
      t.integer :user_id, null: false
      t.integer :upvoteable_id, null: false
      t.string :upvoteable_type, null: false

      t.timestamps
    end

    add_index :upvotes, [:upvoteable_id, :upvoteable_type]
    add_index :upvotes, [:user_id, :upvoteable_type, :upvoteable_id], unique: true
  end
end
