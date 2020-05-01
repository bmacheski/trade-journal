# frozen_string_literal: true

class CreatePairs < ActiveRecord::Migration[6.0]
  def change
    create_table :pairs do |t|
      t.string :name
      t.timestamps
    end
  end
end
