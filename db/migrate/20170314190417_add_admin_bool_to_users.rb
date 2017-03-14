class AddAdminBoolToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :is_admin, :bool, default: false
  end
end
