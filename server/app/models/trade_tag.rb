class TradeTag < ApplicationRecord
  belongs_to :trade
  belongs_to :tag
end
