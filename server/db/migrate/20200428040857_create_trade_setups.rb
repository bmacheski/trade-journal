class CreateTradeSetups < ActiveRecord::Migration[6.0]
  def change
    create_table :trade_setups do |t|
      t.belongs_to :trade
      t.belongs_to :setup
      t.timestamps
    end

    add_index :trade_setups, %i[trade_id setup_id], unique: true
  end
end
