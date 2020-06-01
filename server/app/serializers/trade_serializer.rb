class TradeSerializer < ActiveModel::Serializer
  attributes :id, :action, :pair, :quantity, :entry_date, :exit_date,
             :entry_price, :exit_price, :notes, :image_url, :trade_setups,
             :stop_loss, :take_profit, :fees, :risk_reward_ratio, :risk_multiple,
             :original_take_profit_hit, :is_win, :platform, :trade_tags

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

  def trade_tags
    object.trade_tags.map do |t_tag|
      {
        name: t_tag.tag.name,
        tag_id: t_tag.tag_id
      }
    end
  end
end
