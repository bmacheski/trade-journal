class PairsController < ApplicationController
  def index
    @pairs = Pair.all
    render json: @pairs, status: :ok
  end
end
