class SetupsController < ApplicationController
  before_action :set_setup, only: %i[destroy]

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

  def destroy
    @setup.destroy
    head :no_content
  end

  private

  def set_setup
    @setup = Setup.find params[:id]
  end

  def setup_params
    params.require(:setup).permit(:name)
  end
end
