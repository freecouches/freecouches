class AddFirstAndLastNameToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :first_name, :string, :null => false
    # Last name not required for guests, but we do check for hosting.
    add_column :users, :last_name, :string
  end
end
