class PairsController < ApplicationController
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
end
