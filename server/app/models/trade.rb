class Trade < ApplicationRecord
  belongs_to :pair
  has_many :trade_setups
  has_many :setups, through: :trade_setups

  def self.metrics
    query = <<-SQL
      select count(case when action = 'buy' then 1 else null end) long_count
        ,count(
          case when action = 'buy' and entry_price < exit_price then 1
          else null
          end
        ) long_win_count
        ,count(case when action = 'sell' then 1 else null end) short_count
        ,count(
          case when action = 'sell' and exit_price < entry_price then 1
          else null
          end
        ) short_win_count
        ,count(id) as total_count
        ,count(
          case when action = 'buy' and entry_price < exit_price then 1
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
      from trades;
    SQL

    ActiveRecord::Base.connection.execute(query)
  end
end
