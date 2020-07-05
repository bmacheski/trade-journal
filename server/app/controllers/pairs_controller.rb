class PairsController < ApplicationController
  before_action :set_pair, only: %i[update destroy]

  def index
    page = params[:page] || 1
    sort = params[:sort] || :created_at
    direction = params[:direction] || :asc
    per_page = params[:count] || 20
    @pairs = Pair.order("#{sort} #{direction}").page(page).per(per_page)
    render json: { data: ActiveModel::Serializer::CollectionSerializer.new(
      @pairs, each_serializer: PairSerializer
    ), meta: { page_count: @pairs.total_pages, page: page.to_i, total_count: Pair.count } }
  end

  def create
    @pair = Pair.new pair_params
    if @pair.save
      render json: @pair, status: :ok
    else
      render json: @pair.errors, status: :bad_request
    end
  end

  def update
    @pair.assign_attributes pair_params
    if @pair.save
      render json: @pair, status: :ok
    else
      render json: @pair.errors.full_messages, status: :bad_request
    end
  end

  def destroy
    if @pair.trades.empty?
      @pair.destroy
      head :no_content
    else
      render json: { message: 'pair is referenced by trade' }, status: :conflict
    end
  end

  def metrics
    setup_metrics = Pair.metrics
    render json: setup_metrics, status: :ok
  end

  private

  def set_pair
    @pair = Pair.find params[:id]
  end

  def pair_params
    params.require(:pair).permit(:name)
  end
end
