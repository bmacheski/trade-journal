class Tag < ApplicationRecord
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
      from trade_tags 
      join trades on trades.id = trade_tags.trade_id
      join tags on tags.id = trade_tags.tag_id
      group by name
    SQL
    ActiveRecord::Base.connection.execute(query)
  end
end
