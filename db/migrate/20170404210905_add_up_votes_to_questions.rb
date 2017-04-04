class AddUpVotesToQuestions < ActiveRecord::Migration[5.0]
  def change
    add_column :questions, :up_votes, :integer, default: 0
    add_column :comments, :up_votes, :integer, default: 0  
  end
end
