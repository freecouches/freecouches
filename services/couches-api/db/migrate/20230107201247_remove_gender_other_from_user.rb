class RemoveGenderOtherFromUser < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :gender_other, :string
  end
end
