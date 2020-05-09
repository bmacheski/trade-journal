class AddOriginalTakeProfitHitToTrades < ActiveRecord::Migration[6.0]
  def change
    add_column :trades, :original_take_profit_hit, :boolean, default: false
  end
end
