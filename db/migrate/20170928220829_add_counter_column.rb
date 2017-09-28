class AddCounterColumn < ActiveRecord::Migration[5.1]
  def change
    add_column :products, :upvotes_count, :integer
    add_column :comments, :upvotes_count, :integer
  end
end
