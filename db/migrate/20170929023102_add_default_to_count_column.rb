class AddDefaultToCountColumn < ActiveRecord::Migration[5.1]
  def change
    change_column_null :comments, :upvotes_count, false
    change_column_default :comments,  :upvotes_count, 0

    change_column_null :products, :upvotes_count, false
    change_column_default :products, :upvotes_count, 0

    change_column_null :products, :comments_count, false
    change_column_default :products, :comments_count, 0
  end
end
