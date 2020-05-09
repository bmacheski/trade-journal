# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_08_210324) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "pairs", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "setups", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "trade_setups", force: :cascade do |t|
    t.bigint "trade_id"
    t.bigint "setup_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["setup_id"], name: "index_trade_setups_on_setup_id"
    t.index ["trade_id", "setup_id"], name: "index_trade_setups_on_trade_id_and_setup_id", unique: true
    t.index ["trade_id"], name: "index_trade_setups_on_trade_id"
  end

  create_table "trades", force: :cascade do |t|
    t.bigint "pair_id"
    t.decimal "quantity"
    t.string "action"
    t.decimal "entry_price"
    t.decimal "exit_price"
    t.datetime "entry_date"
    t.datetime "exit_date"
    t.text "notes"
    t.decimal "take_profit"
    t.decimal "fees"
    t.string "image_url"
    t.decimal "stop_loss"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.decimal "risk_reward_ratio"
    t.decimal "risk_multiple"
    t.boolean "original_take_profit_hit", default: false
    t.index ["pair_id"], name: "index_trades_on_pair_id"
  end

end
