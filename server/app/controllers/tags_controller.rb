class TagsController < ApplicationController
  before_action :set_tag, only: %i[update destroy]

  def index
    render json: Tag.all, status: :ok
  end

  def metrics
    render json: Tag.metrics, status: :ok
  end

  def create
    @tag = Tag.new tag_params
    if @tag.save
      render json: @tag, status: :ok
    else
      render json: @tag.errors, status: :bad_request
    end
  end

  def update
    @tag.assign_attributes tag_params
    if @tag.save
      render json: @tag, status: :ok
    else
      render json: @tag.errors.full_messages, status: :bad_request
    end
  end

  def destroy

    if @tag.destroy
      head :no_content
    else
      render json: @tag.errors.full_messages, status: :conflict
    end
  end

  private

  def set_tag
    @tag = Tag.find params[:id]
  end

  def tag_params
    params.require(:tag).permit(:name)
  end
end
