class PlatformsController < ApplicationController
  before_action :set_platform, only: %i[update destroy]

  def index
    render json: Platform.all, status: :ok
  end

  def create
    @platform = Platform.new platform_params
    if @platform.save
      render json: @platform, status: :ok
    else
      render json: @platform.errors, status: :bad_request
    end
  end

  def update
    @platform.assign_attributes platform_params
    if @platform.save
      render json: @platform, status: :ok
    else
      render json: @platform.errors.full_messages, status: :bad_request
    end
  end

  def destroy
    if @platform.destroy
      head :no_content
    else
      render json: @platform.errors.full_messages, status: :conflict
    end
  end

  private

  def set_platform
    @platform = Platform.find params[:id]
  end

  def platform_params
    params.require(:platform).permit(:name)
  end
end
