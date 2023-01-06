class AddBirthDateToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :birth_date, :string
  end
end
