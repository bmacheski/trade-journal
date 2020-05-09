class PlatformsController < ApplicationController
  def index
    render json: Platform.all, status: :ok
  end
end
