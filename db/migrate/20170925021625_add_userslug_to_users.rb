class AddUserslugToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :userslug, :string, unique: true
  end
end
