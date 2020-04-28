# frozen_string_literal: true

class CreateTrades < ActiveRecord::Migration[6.0]
  def change
    create_table :trades do |t|
      t.belongs_to :pair
      t.decimal :quantity
      t.string :action
      t.decimal :entry_price
      t.decimal :exit_price
      t.datetime :entry_date
      t.datetime :exit_date
      t.text :notes
      t.string :risk_reward
      t.decimal :take_profit
      t.decimal :fees
      t.string :image_url
      t.decimal :target
      t.decimal :stop_loss
      t.timestamps
    end
  end
end
