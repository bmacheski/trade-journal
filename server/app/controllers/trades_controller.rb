class TradesController < ApplicationController
  before_action :set_trade, only: %i[show destroy]

  def index
    page = params[:page] || 1
    sort = params[:sort] || :created_at
    direction = params[:direction] || :asc
    per_page = params[:count_per_page] || 20
    @trades = Trade.order("#{sort} #{direction}").page(page).per(per_page)
    render json: { data: ActiveModel::Serializer::CollectionSerializer.new(
      @trades, each_serializer: TradeSerializer
    ), meta: { page_count: @trades.total_pages, page: page.to_i, total_count: Trade.count } }
  end

  def create
    @trade = Trade.new trade_params.except(:pair)
    set_pair
    set_platform

    if @trade.save
      render json: @trade, status: :ok
    else
      render json: @trade.errors, status: :bad_request
    end
  end

  def show
    render json: @trade
  end

  def update
    @trade = Trade.find params[:id]
    set_pair
    set_setups
    set_platform

    @trade.assign_attributes trade_params.except(:pair, :trade_setups)

    if @trade.save
      render json: @trade, status: :ok
    else
      render json: @trade.errors.full_messages, status: :bad_request
    end
  end

  def destroy
    @trade.destroy
    head :no_content
  end

  def metrics
    metrics = Trade.metrics
    render json: metrics.first, status: :ok
  end

  def setup_metrics
    setup_metrics = Trade.setup_metrics
    render json: setup_metrics, status: :ok
  end

  private

  def trade_params
    params.require(:trade).permit(:entry_date, :exit_date, :name, :notes,
                                  :quantity, :entry_price, :exit_price, :action,
                                  :original_take_profit_hit, :risk_reward,
                                  :fees, :target, :stop_loss, :image_url, :take_profit,
                                  pair: %i[id name],
                                  platform: %i[id name],
                                  trade_setups: %i[id setup_id])
  end

  def set_pair
    return if trade_params[:pair].nil?

    @trade.pair = Pair.find trade_params[:pair][:id]
  end

  def set_platform
    return if trade_params[:platform].nil?

    @trade.platform = Platform.find trade_params[:platform][:id]
  end

  def set_setups
    return if trade_params[:trade_setups].nil?

    # TODO: refactor this mess
    ActiveRecord::Base.transaction do
      @trade.trade_setups.destroy_all
      trade_params[:trade_setups].each do |t_setup|
        trade_setup = TradeSetup.new
        trade_setup.trade = @trade
        trade_setup.setup = Setup.find(t_setup[:setup_id])
        trade_setup.save!
      end
    end
  end

  def set_trade
    @trade = Trade.find params[:id]
  end
end
