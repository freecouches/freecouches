class AddAboutAndGenderToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :about_me, :text
    add_column :users, :gender, :string
    add_column :users, :gender_other, :string
  end
end
