class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.string :aim
      t.string :strategy
      t.integer :completed

      t.timestamps
    end
  end
end
