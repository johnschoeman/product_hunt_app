class AddCommentsCountColumnToProducts < ActiveRecord::Migration[5.1]
  def change
    add_column :products, :comments_count, :integer
  end
end
