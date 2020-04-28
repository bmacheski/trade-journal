# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Setup.create(name: 'breakout').save!
Setup.create(name: 'ichimoku cloud kumo twist').save!

eth_pair = Pair.create(name: 'ETHUSD')
eth_pair.save!

a = Trade.create(entry_price: 1, exit_price: 2, quantity: 3, action: 'buy')
a.pair = eth_pair
a.save!

btc_pair = Pair.create(name: 'XBTUSD')
btc_pair.save!

b = Trade.create(entry_price: 1, exit_price: 200, quantity: 300, action: 'buy')
b.pair = btc_pair
b.save!

c = Trade.create(entry_price: 1, exit_price: 500, quantity: 300, action: 'buy')
c.pair = btc_pair
c.save!
