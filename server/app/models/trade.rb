class Trade < ApplicationRecord
  belongs_to :pair
  has_many :trade_setups
  has_many :setups, through: :trade_setups

  def self.metrics
    query = <<-SQL
      WITH cte AS (
        SELECT date_trunc('month', entry_date) AS mon
          ,SUM(
            CASE WHEN action = 'buy' THEN (quantity * exit_price) - (quantity * entry_price) 
            ELSE (quantity * entry_price) - (quantity * exit_price) 
          END) AS mon_sum
          FROM trades 
          GROUP BY 1
      )
      SELECT EXTRACT(MONTH FROM mon) AS month
        ,EXTRACT(YEAR FROM mon) AS year
        ,SUM(c.mon_sum) OVER (ORDER BY mon) AS running_sum
      FROM (SELECT min(mon) AS min_mon FROM cte) init
        ,generate_series(init.min_mon, now(), interval '1 month') mon
      LEFT JOIN cte c USING (mon)
      ORDER BY mon;
    SQL

    ActiveRecord::Base.connection.execute(query)
  end
end
