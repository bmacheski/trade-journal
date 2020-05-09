class AddIsWinToTrades < ActiveRecord::Migration[6.0]
  def change
    add_column :trades, :is_win, :boolean, default: false
  end
end
