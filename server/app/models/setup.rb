class Setup < ApplicationRecord
  has_many :trade_setups
  has_many :trades, through: :trade_setups
end
