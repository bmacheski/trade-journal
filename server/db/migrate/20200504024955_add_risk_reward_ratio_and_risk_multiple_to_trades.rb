class AddRiskRewardRatioAndRiskMultipleToTrades < ActiveRecord::Migration[6.0]
  def change
    add_column :trades, :risk_reward_ratio, :decimal
    add_column :trades, :risk_multiple, :decimal
  end
end
