class Setup < ApplicationRecord
  has_many :trade_setups
  has_many :trades, through: :trade_setups

  def self.metrics
    query = <<~SQL
      select name
      , count(
        case 
        when action = 'buy' and entry_price < exit_price then 1
        when action = 'sell' and entry_price > exit_price then 1
        else null
        end
      ) win_count
      ,count(
        case when action = 'buy' and entry_price > exit_price then 1
        when action = 'sell' and entry_price < exit_price then 1
        else null
        end
      ) loss_count
      from trade_setups 
      join trades on trades.id = trade_setups.trade_id
      join setups on setups.id = trade_setups.setup_id
      group by name
    SQL
    ActiveRecord::Base.connection.execute(query)
  end
end
