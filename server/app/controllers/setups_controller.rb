class SetupsController < ApplicationController
  before_action :set_setup, only: %i[update destroy]

  def index
    render json: Setup.all, status: :ok
  end

  def create
    @setup = Setup.new setup_params
    if @setup.save
      render json: @setup, status: :ok
    else
      render json: @setup.errors, status: :bad_request
    end
  end

  def update
    @setup.assign_attributes setup_params
    if @setup.save
      render json: @setup, status: :ok
    else
      render json: @setup.errors.full_messages, status: :bad_request
    end
  end

  def destroy
    if @setup.trades.empty?
      @setup.destroy
      head :no_content
    else
      render json: { message: 'setup is referenced by trade' }, status: :conflict
    end
  end

  def metrics
    setup_metrics = Setup.metrics
    render json: setup_metrics, status: :ok
  end

  private

  def set_setup
    @setup = Setup.find params[:id]
  end

  def setup_params
    params.require(:setup).permit(:name)
  end
end
