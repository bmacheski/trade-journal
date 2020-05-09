class Trade < ApplicationRecord
  belongs_to :pair
  belongs_to :platform
  has_many :trade_setups
  has_many :setups, through: :trade_setups

  before_save :set_risk_reward_ratio, :set_risk_multiple, :set_is_win

  def self.metrics
    query = <<~SQL
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
        ) loss_count,
        avg(risk_reward_ratio) risk_reward_ratio_avg,
        avg(risk_multiple) risk_multiple_avg 
      from trades;
    SQL
    ActiveRecord::Base.connection.execute(query)
  end

  def self.setup_metrics
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

  def set_risk_reward_ratio
    self.risk_reward_ratio =
      unless required_values_missing?
        potential_risk = (entry_price - stop_loss).abs
        potential_reward = (entry_price - take_profit).abs
        potential_reward / potential_risk
      end
  end

  def set_risk_multiple
    self.risk_multiple =
      unless required_values_missing?(exit_price)
        (exit_price - entry_price) / (entry_price - stop_loss)
      end
  end

  def required_values_missing?(*additional_values)
    fields = [entry_price, stop_loss, take_profit] + additional_values
    fields.any?(&:nil?)
  end

  def set_is_win
    self.is_win = action == 'sell' && entry_price > exit_price ||
                  action == 'buy' && entry_price < exit_price
  end
end
