class TradesController < ApplicationController
  before_action :set_trade, only: %i[show destroy]

  def index
    page = params[:page] || 1
    sort = params[:sort] || :created_at
    @trades = Trade.order(sort).page(page).per(20)
    render json: @trades, status: :ok
  end

  def create
    @trade = Trade.new trade_params.except(:pair)
    set_pair

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
    render json: metrics, status: :ok
  end

  private

  def set_pair
    return if trade_params[:pair].nil?

    @trade.pair = Pair.find trade_params[:pair][:id]
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

  def trade_params
    params.require(:trade).permit(:entry_date, :exit_date, :name, :notes, :take_profit,
                                  :quantity, :entry_price, :exit_price, :action,
                                  :risk_reward, :image_url, :fees, :target, :stop_loss,
                                  pair: %i[id name created_at updated_at],
                                  trade_setups: %i[id created_at updated_at setup_id])
  end

  def set_trade
    @trade = Trade.find params[:id]
  end
end