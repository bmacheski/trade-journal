class TradeSerializer < ActiveModel::Serializer
  attributes :id, :action, :pair, :quantity, :entry_date, :exit_date,
             :entry_price, :exit_price, :notes, :risk_reward, :image_url, :trade_setups,
             :stop_loss, :take_profit, :fees, :target

  def pair
    return if object.pair.nil?

    {
      name: object.pair.name,
      id: object.pair.id
    }
  end

  def trade_setups
    return [] if object.pair.nil?

    object.trade_setups.map do |t_setup|
      {
        id: t_setup.id,
        name: t_setup.setup.name,
        setup_id: t_setup.setup.id
      }
    end
  end
end
