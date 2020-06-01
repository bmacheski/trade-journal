class TagsController < ApplicationController
  def index
    render json: Tag.all, status: :ok
  end

  def metrics
    render json: Tag.metrics, status: :ok
  end
end
