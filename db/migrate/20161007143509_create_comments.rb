class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.integer :book_id
      t.integer :question_id
      t.string :text
    end
  end
end
