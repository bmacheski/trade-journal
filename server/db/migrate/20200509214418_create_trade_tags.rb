class CreateTradeTags < ActiveRecord::Migration[6.0]
  def change
    create_table :trade_tags do |t|
      t.belongs_to :trade
      t.belongs_to :tag
      t.timestamps
    end

    add_index :trade_tags, %i[trade_id tag_id], unique: true
  end
end
