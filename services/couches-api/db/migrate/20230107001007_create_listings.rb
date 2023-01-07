class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.text :about_home
      t.integer :max_guests

      t.timestamps
    end
  end
end
