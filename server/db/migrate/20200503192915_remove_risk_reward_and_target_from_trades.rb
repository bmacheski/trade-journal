class RemoveRiskRewardAndTargetFromTrades < ActiveRecord::Migration[6.0]
  def change
    remove_column :trades, :risk_reward, :string
    remove_column :trades, :target, :decimal
  end
end
