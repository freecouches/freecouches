class AddListingToUser < ActiveRecord::Migration[7.0]
  def change
    add_reference :users, :listing, null: false, foreign_key: true
  end
end
