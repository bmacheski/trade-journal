class TimeFrameSerializer < ActiveModel::Serializer
  attributes :amount, :duration_name, :duration_abbrevation

  def duration_name
    object.duration.name
  end

  def duration_abbrevation
    object.duration.abbreviation
  end
end
