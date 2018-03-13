class CreateRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :instructions
      t.string :image
      t.belongs_to :user, index:true

      t.timestamps
    end
  end
end
