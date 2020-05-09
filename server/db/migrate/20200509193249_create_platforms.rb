class CreatePlatforms < ActiveRecord::Migration[6.0]
  def change
    create_table :platforms do |t|
      t.string :name
      t.timestamps
    end
    add_belongs_to :trades, :platform
  end
end
