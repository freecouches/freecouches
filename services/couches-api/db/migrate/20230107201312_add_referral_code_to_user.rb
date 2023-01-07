class AddReferralCodeToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :referral_code, :string
  end
end
